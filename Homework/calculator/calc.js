function result(first, second, res) {
    console.log(first)
    console.log(second)

    res.innerHTML = `<b>${parseInt(first) + parseInt(second)}</b>`
    console.log(res)
}