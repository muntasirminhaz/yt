import AppKit
import Foundation

let out = URL(fileURLWithPath: CommandLine.arguments[1])
try? FileManager.default.createDirectory(at: out, withIntermediateDirectories: true)
let navy = CGColor(red: 0x15 / 255, green: 0x29 / 255, blue: 0x4d / 255, alpha: 1)
let brass = CGColor(red: 0xe5 / 255, green: 0xb6 / 255, blue: 0x59 / 255, alpha: 1)
let white = CGColor(gray: 1, alpha: 1)

enum Style { case flat, rounded(inset: CGFloat, radius: CGFloat), foreground(CGColor) }

func render(_ px: Int, style: Style, name: String) {
    let cs = CGColorSpace(name: CGColorSpace.sRGB)!
    var info = CGImageAlphaInfo.premultipliedLast.rawValue
    if case .flat = style { info = CGImageAlphaInfo.noneSkipLast.rawValue }
    let ctx = CGContext(data: nil, width: px, height: px, bitsPerComponent: 8, bytesPerRow: 0, space: cs, bitmapInfo: info)!
    let s = CGFloat(px) / 100
    ctx.translateBy(x: 0, y: CGFloat(px))
    ctx.scaleBy(x: s, y: -s)
    var mark = brass
    var inset: CGFloat = 0
    switch style {
    case .flat:
        ctx.setFillColor(navy)
        ctx.fill(CGRect(x: 0, y: 0, width: 100, height: 100))
    case .rounded(let i, let radius):
        inset = i
        let r = CGRect(x: i, y: i, width: 100 - 2 * i, height: 100 - 2 * i)
        ctx.addPath(CGPath(roundedRect: r, cornerWidth: radius, cornerHeight: radius, transform: nil))
        ctx.setFillColor(navy)
        ctx.fillPath()
    case .foreground(let c):
        mark = c
    }
    let k = (100 - 2 * inset) / 100
    ctx.translateBy(x: inset, y: inset)
    ctx.scaleBy(x: k, y: k)
    ctx.setStrokeColor(mark)
    ctx.setLineWidth(9)
    ctx.setLineCap(.round)
    ctx.setLineJoin(.round)
    for dy in [0, 20, 40] as [CGFloat] {
        ctx.move(to: CGPoint(x: 24, y: 44 + dy))
        ctx.addLine(to: CGPoint(x: 50, y: 22 + dy))
        ctx.addLine(to: CGPoint(x: 76, y: 44 + dy))
        ctx.strokePath()
    }
    let dest = CGImageDestinationCreateWithURL(out.appendingPathComponent(name) as CFURL, "public.png" as CFString, 1, nil)!
    CGImageDestinationAddImage(dest, ctx.makeImage()!, nil)
    CGImageDestinationFinalize(dest)
}

render(1024, style: .flat, name: "ios-1024.png")
render(1024, style: .foreground(brass), name: "ios-1024-dark.png")
render(1024, style: .foreground(white), name: "ios-1024-tinted.png")
for px in [16, 32, 64, 128, 256, 512, 1024] { render(px, style: .rounded(inset: 10, radius: 18), name: "mac-\(px).png") }
for px in [48, 64, 96, 128, 256, 512] { render(px, style: .rounded(inset: 0, radius: 18), name: "icon-\(px).png") }
print("ok")
