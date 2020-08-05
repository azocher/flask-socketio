document.addEventListener('DOMContentLoaded', () => {
    // setup and open web socket connection to allow multiple user votes simultaneously
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port)

    socket.on('connect', () => {
        // query for a click event on button
        document.querySelectorAll('button').forEach(button => {
            button.onclick = () => {
                // emit a message to websocket server
                socket.emit("kewl beanz added")
            }
        })     
    })
    
    // is message received
    socket.on('add one beanz', () => {
         // update count on cool beans counter +1
         let count = parseInt(document.getElementById("count").innerText)
         count = count + 1
         document.getElementById("count").innerText = count
    })
       
})


