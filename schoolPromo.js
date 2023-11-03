

function schoolName(event){
    console.log(event)
    
    let x = document.getElementById('area').value
    let y = document.getElementById('storage').innerText
    
    try {
        document.getElementById(x).style.opacity = "1"
        document.getElementById(x).style.position = "static"
        if(x==y){
            return
        }
        document.getElementById(y).style.opacity = "0"
        document.getElementById(y).style.position = "absolute"
        document.getElementById('storage').innerText = x
        event.preventDefault()
    } catch (error) {

        let z = document.getElementById("noClasses")
        console.log(z)
        z.style.opacity = "1"
        z.style.position = "static"
        document.getElementById('storage').innerText = "noClasses"
        if(x==y){
            return
        }
        document.getElementById(y).style.opacity = "0"
        document.getElementById(y).style.position = "absolute"
    }
    event.preventDefault()
}

const myForm = document.getElementById("myForm")
myForm.addEventListener("submit", schoolName)
