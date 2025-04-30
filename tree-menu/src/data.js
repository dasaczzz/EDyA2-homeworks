class Node {
    constructor(value) {
        this.value = value
        this.children = []
    }

    addChild(node) {
        this.children.push(node)
    }
}

const menuNode = new Node("menu")
const profileNode = new Node("profile")
const aboutNode = new Node("about us")
const loginNode = new Node("login")
const logoutNode = new Node("logout")
const settingsNode = new Node("settings")
const screenNode = new Node("screen")
const brightnessNode = new Node("brightness")
const colorNode = new Node("colors")
const soundNode = new Node("sound")

menuNode.addChild(profileNode)
menuNode.addChild(aboutNode)
menuNode.addChild(settingsNode)
profileNode.addChild(loginNode)
profileNode.addChild(logoutNode)
settingsNode.addChild(screenNode)
screenNode.addChild(brightnessNode)
screenNode.addChild(colorNode)
settingsNode.addChild(soundNode)

const dfs = (node, level) => {
    console.log(`${" ".repeat(level)}${node.value}`)
    for(let child of node.children) {
        dfs(child, level+2)
    }
}

dfs(menuNode, 0)

export default menuNode