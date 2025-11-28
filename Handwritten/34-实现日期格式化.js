function formateDate(nowDate,formateDate){
    let addZero = (dateInfo)=>{
        //padStart 是 JavaScript 中用于字符串补全的内置方法
        // str.padStart(targetLength, padString)
        // targetLength：目标字符串的最终长度。如果原字符串长度已经达到或超过该值，则不会进行补全。
        // padString（可选）：用于补全的字符串。如果未提供，默认使用空格 ' '。
        return dateInfo.toString().padStart(2,'0')
    }
    let year = nowDate.getFullYear()
    let month =addZero(nowDate.getMonth() + 1) 
    let day = addZero(nowDate.getDate())
    let hour = addZero(nowDate.getHours())
    let minutes = addZero(nowDate.getMinutes())
    let seconds = addZero(nowDate.getSeconds())
    return formateDate.replace('YYYY',year)
                      .replace('MM',month)
                      .replace('DD',day)
                      .replace('HH',hour)
                      .replace('mm',minutes)
                      .replace('ss',seconds)
}

console.log(formateDate(new Date(),'YYYY-MM-DD HH:mm:ss'));
