// import { mainView } from './views'

// const xml = mainView()

// ui.layout(xml)

// ui.button.click(async function () {
//     const sid = ui.input.text()
//     toastLog('sid: ' + sid)

//     try {
//         // 打开拼多多商家
//         launchApp('拼多多商家版')
//         toastLog('打开拼多多商家版')
//     } catch (error) {
//         toastLog('打开拼多多商家版失败')
//     }

//     // 点击商品管理
//     await wait(3000)
//     toastLog('点击商品管理')
//     const viewPager = className('androidx.viewpager.widget.ViewPager').scrollable(true).depth(6).findOne().children()

//     viewPager.forEach(child => {
//         const target = child.findOne(className('android.widget.TextView').text('商品管理'))
//         tap(target)
//     })
// })

function main() {
    const sid = '569910057947'
    try {
        // 打开拼多多商家
        launchApp('拼多多商家版')
        toastLog('打开拼多多商家版')
    } catch (error) {
        toastLog('打开拼多多商家版失败')
    }

    // 点击商品管理
    sleep(3000)
    toastLog('点击商品管理')
    const viewPager = className('androidx.viewpager.widget.ViewPager').scrollable(true).depth(6).findOne().children()

    viewPager.forEach(child => {
        const target = child.findOne(className('android.widget.TextView').text('商品管理'))
        tap(target)
    })

    sleep(3000)
    toastLog('点击发布商品')
    const publishButton = className('android.widget.TextView').text('发布商品').findOne()
    if (publishButton) {
        tap(publishButton)
    } else {
        toastLog('未找到发布商品按钮')
    }

    sleep(1000)
    toastLog('复制商品')
    const copyButton = className('android.widget.TextView').text('复制商品').findOne()
    if (copyButton) {
        tap(copyButton)
    } else {
        toastLog('未找到复制商品按钮')
    }

    // 复制店内商品
    sleep(1000)
    toastLog('复制店内商品')
    const copyInShopButton = className('android.widget.TextView').text('复制店内商品').findOne()
    if (copyInShopButton) {
        tap(copyInShopButton)
    } else {
        toastLog('未找到复制店内商品按钮')
    }

    // 输入商品 id
    sleep(1000)
    toastLog('输入商品 id')
    const input = className('android.widget.EditText').clickable(true).depth(22).findOne()
    if (input) {
        input.setText(sid)
    } else {
        toastLog('未找到输入框')
    }

    // 选择商品
    sleep(5000)
    toastLog('选择商品')
    const searchButton = className('android.widget.TextView').depth(24).findOne().parent().parent()
    if (searchButton) {
        tap(searchButton)
    } else {
        return toastLog('未找到商品')
    }

    // 点击确定复制商品
    sleep(1000)
    toastLog('点击确定复制商品')
    const confirmButton = className('android.widget.TextView').text('确认复制商品').findOne()
    if (confirmButton) {
        tap(confirmButton)
    } else {
        toastLog('未找到确定复制商品按钮')
    }

    // 点击提交并上架
    sleep(3000)
    toastLog('点击提交并上架')
    const submitButton = className('android.widget.TextView').text('提交并上架').findOne().parent()
    if (submitButton) {
        while (!submitButton.click()) {
            sleep(1000)
            toastLog('点击提交并上架')
        }
    } else {
        toastLog('未找到提交并上架按钮')
    }

    // 退出 拼多多商家版
    toastLog('退出拼多多商家版')
    sleep(5000)
    back()
    sleep(1000)
    back()

    toastLog('复制成功')
}

main()

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
