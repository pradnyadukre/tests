function addMore() {
    let name = document.getElementById('name').value
    if(name==''){
        alert("please enter something to do you alsi");
    }
    else{
        let box =document.getElementById('box');
        let li = document.createElement('li');
        li.textContent = name ;
        let a = document.createElement('a');
        a.textContent="DONE"
        a.href="javascript:void(0)"
        a.className="remove"
        li.appendChild(a);
        box.appendChild(li);
    }
    
    document.getElementById('name').value=""
    
    }
    let btn = document.querySelector('ol')
    btn.addEventListener('click',function(e){
       
      let box= document.getElementById('box');
      let li = e.target.parentNode;
      box.removeChild(li)
    })