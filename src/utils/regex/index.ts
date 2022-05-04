function regex(type: string, val: any): Boolean {
    let reg;
    switch (type) {
        case "video":
            reg = /\.(mp4|avi|wmv|mpg|mpeg|mov|rm|ram|swf|flv)/;
            break;
        default:
            reg = /\S /
            break;
    }

    return reg.test(val)
}

export default regex;
