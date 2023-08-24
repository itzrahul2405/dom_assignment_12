document.getElementById('btn').addEventListener('click', registerUser);

function registerUser(e){

    e.preventDefault();

    
    const name = document.getElementById('name').value
    const mail = document.getElementById('mail').value
    const phone = document.getElementById('phone').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value

    // console.log(name);
    // console.log(mail);
    // console.log(phone);
    // console.log(date);
    // console.log(time);

    // localStorage.setItem('name', name);
    // localStorage.setItem('mail', mail);
    // localStorage.setItem('phone', phone);
    // localStorage.setItem('date', date);
    // localStorage.setItem('time', time);


    let myObj = {
        'name' : name,
        'mail' : mail,
        'phone' : phone,
        'date' : date,
        'time' : time
    }



    // if(localStorage.getItem('myobj') != null){

    //     let previous_data = localStorage.getItem('myobj')
    //     console.log(previous_data)

    //     let serialized = JSON.stringify(myObj);
    //     console.log(serialized)

    //     current_data = previous_data.push(serialized)
    //     console.log(current_data)

    //     localStorage.setItem('myobj', current_data)


    // }else{
        
    //     let serialized = JSON.stringify(myObj);
    //     localStorage.setItem('myobj', serialized)

    // }
    

    // console.log(localStorage.getItem('myobj'));


    let serialized = JSON.stringify(myObj);
    localStorage.setItem(mail, serialized)
    console.log(localStorage.getItem(mail));

    



    

    
    
}

