import { mainView } from './views'

class Message {
    print(...args: any[]) {
        console.log("This is a message", ...args)
    }
}
toast("hello world")


const message = new Message()

message.print(1, 6, 5)

ui.layout(mainView())