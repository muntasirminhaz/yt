//
//  ViewController.swift
//  Shared (App)
//

import WebKit

#if os(iOS)
    import UIKit
    typealias PlatformViewController = UIViewController
#elseif os(macOS)
    import Cocoa
    import SafariServices
    typealias PlatformViewController = NSViewController
#endif

let extensionBundleIdentifier = "com.cyberm3.commander.Extension"

class ViewController: PlatformViewController, WKNavigationDelegate, WKScriptMessageHandler {

    @IBOutlet var webView: WKWebView!

    override func viewDidLoad() {
        super.viewDidLoad()

        self.webView.navigationDelegate = self

        self.webView.configuration.userContentController.add(self, name: "controller")

        self.webView.loadFileURL(
            Bundle.main.url(forResource: "Main", withExtension: "html")!,
            allowingReadAccessTo: Bundle.main.resourceURL!)
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        #if os(iOS)
            webView.evaluateJavaScript("show('\(UIDevice.current.userInterfaceIdiom == .pad ? "ipad" : "ios")')")
        #elseif os(macOS)
            webView.evaluateJavaScript("show('mac')")

            SFSafariExtensionManager.getStateOfSafariExtension(withIdentifier: extensionBundleIdentifier) {
                state, error in
                guard let state = state, error == nil else { return }
                DispatchQueue.main.async {
                    webView.evaluateJavaScript("show('mac', \(state.isEnabled))")
                }
            }
        #endif
    }

    func webView(
        _ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction,
        decisionHandler: @escaping (WKNavigationActionPolicy) -> Void
    ) {
        guard let url = navigationAction.request.url, url.scheme != "file" else {
            return decisionHandler(.allow)
        }
        #if os(iOS)
            UIApplication.shared.open(url)
        #elseif os(macOS)
            NSWorkspace.shared.open(url)
        #endif
        decisionHandler(.cancel)
    }

    func userContentController(
        _ userContentController: WKUserContentController, didReceive message: WKScriptMessage
    ) {
        #if os(macOS)
            guard message.body as? String == "open-preferences" else { return }

            SFSafariApplication.showPreferencesForExtension(withIdentifier: extensionBundleIdentifier) { error in
                guard error == nil else { return }
                DispatchQueue.main.async {
                    NSApp.terminate(self)
                }
            }
        #endif
    }

}
