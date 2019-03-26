function youClicked() {
    let strIp = document.getElementById('anyStr')
    console.log(`You have clicked button`)
    console.log(strIp)
    console.log(strIp.value)
    let dvEmp = document.getElementById('empDv')

    dvEmp.innerHTML = `<b>${strIp.value.toUpperCase()}</b>`
    console.log(dvEmp)

}