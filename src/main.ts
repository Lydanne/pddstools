import { mainView } from './views'

const xml = mainView()

ui.layout(xml)

ui.button.click(async function () {
    const sid = ui.input.text()
    toastLog('sid: ' + sid)

    try {
        // 打开拼多多商家
        launchApp('拼多多商家版')
        toastLog('打开拼多多商家版')
    } catch (error) {
        toastLog('打开拼多多商家版失败')
    }

    // 点击商品管理
    await wait(3000)
    toastLog('点击商品管理')
    const viewPager = className('androidx.viewpager.widget.ViewPager').scrollable(true).depth(6).findOne().children()

    viewPager.forEach(child => {
        const target = child.findOne(className('android.widget.TextView').text('商品管理'))
        tap(target)
    })
})

function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function tap(target: any) {
    if (target) {
        click(target.bounds().centerX(), target.bounds().centerY())
    } else {
        toastLog('未找到目标')
    }
}
