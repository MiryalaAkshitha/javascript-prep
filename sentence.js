function capitalizeWords(sentence) {
    // Your implementation
    const result = sentence
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
        console.log(result,'result')
}

capitalizeWords('hello this is akshitha')