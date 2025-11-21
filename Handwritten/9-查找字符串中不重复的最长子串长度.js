  function lengthOfLongestSubstring(s){
    let maxLength = 0,left = 0
    const wordsSet = new Set()
    for(let right = 0;right < s.length;right++){
      while(wordsSet.has(s[right])){
        wordsSet.delete(s[left])
        left++
      }
      wordsSet.add(s[right])
      maxLength = Math.max(maxLength,right - left + 1)
    }
    return maxLength
  }

console.log(lengthOfLongestSubstring("abcabcbb")); // 输出: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // 输出: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // 输出: 3 ("wke")
console.log(lengthOfLongestSubstring(""));