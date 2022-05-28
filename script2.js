const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')

}
function check()
{
	
	
	var c2 = document.getElementById("checkbox1");
	
	var t2 = document.getElementById("t1");
	
	if(c2.checked == true)
		{
		
			t2.style.display = "inline-block";
			 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
			
		}
	else {
	var nu = document.getElementsByClassName("section");
		nu.style.display= "none";
	}

	

}
function check2()
{
	var t2 = document.getElementById("t2");
	var c2 = document.getElementById("checkbox2");
	if(c2.checked == true)
		{
		
			t2.style.display = "inline-block";
			 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
			
		}
	else {
	var nu = document.getElementsByClassName("section");
		nu.style.display= "none";
	}
}
function check3()
{
	var t3 = document.getElementById("t3");
	var c3 = document.getElementById("checkbox3");
	if(c3.checked == true)
		{
			t3.style.display = "inline-block";

			 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
		}
	else {
		
	}
}
function check4()
{
	var t4 = document.getElementById("t4");
	var c4 = document.getElementById("checkbox4");
	if(c4.checked == true)
		{
			t4.style.display = "inline-block";
			
			 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
		}
	else {
		 {
		var nu = document.getElementsByClassName("section");
		nu.style.display= "none";
	}
	}
}
function check5()
{
	var t5 = document.getElementById("t5");
	var c5 = document.getElementById("checkbox5");
	if(c5.checked == true)
		{
			t5.style.display = "inline-block";
			
			 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
		}
	else {
		t5.style.display = "none";
	}
}
function deschide(){
	 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
	
}
function inchide()
{
	 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.remove('active')
                    overlay.classList.remove('active')
				 document.querySelectorAll('input[type="checkbox"]')
    .forEach(el => el.checked = false);
	var t1 = document.getElementById("t1");
	var t2 = document.getElementById("t2");
	var t3 = document.getElementById("t3");
	 
	var t4 = document.getElementById("t4");
	var t5 = document.getElementById("t5");
	var t6 = document.getElementById("t6");
	var t7 = document.getElementById("t7");
	var t8 = document.getElementById("t8");
	var t9 = document.getElementById("t9");
	var t10 = document.getElementById("t10");
	var t11 = document.getElementById("t11");
	var t12 = document.getElementById("t12");
	var t13 = document.getElementById("t13");
		t1.style.display = "none";
		t2.style.display = "none";
		t3.style.display = "none";
		t4.style.display = "none";
		t5.style.display = "none";
		t6.style.display = "none";
		t7.style.display = "none";
		t8.style.display = "none";
		t9.style.display = "none";
		t10.style.display = "none";
		t11.style.display = "none";
		t12.style.display = "none";
		t13.style.display = "none";
	
}
function check6()
{
	var t6 = document.getElementById("t6");
	var c6 = document.getElementById("checkbox6");
	if(c6.checked == true)
		{
			t6.style.display = "inline-block";
			
			 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
		}
	else {
		t6.style.display = "none";
	}
}
function check7()
{
	var t7 = document.getElementById("t7");
	var c7 = document.getElementById("checkbox7");
	if(c7.checked == true)
		{
			t7.style.display = "inline-block";
			
			 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
		}
	else {
		t7.style.display = "none";
	}
}
function check8()
{
	var t5 = document.getElementById("t8");
	var c5 = document.getElementById("checkbox8");
	if(c5.checked == true)
		{
			t5.style.display = "inline-block";
			 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
			
		}
	else {
		t5.style.display = "none";
	}
}
function check9()
{
	var t5 = document.getElementById("t9");
	var c5 = document.getElementById("checkbox9");
	if(c5.checked == true)
		{
			t5.style.display = "inline-block";
			 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
			
		}
	else {
		t5.style.display = "none";
	}
}
function check10()
{
	var t5 = document.getElementById("t10");
	var c5 = document.getElementById("checkbox10");
	if(c5.checked == true)
		{
			t5.style.display = "inline-block";
			 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
			
		}
	else {
		t5.style.display = "none";
	}
}
function check11()
{
	var t5 = document.getElementById("t11");
	var c5 = document.getElementById("checkbox11");
	if(c5.checked == true)
		{
			t5.style.display = "inline-block";
			
			 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
		}
	else {
		t5.style.display = "none";
	}
}
function check12()
{
	var t5 = document.getElementById("t12");
	var c5 = document.getElementById("checkbox12");
	if(c5.checked == true)
		{
			t5.style.display = "inline-block";
			
			 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
		}
	else {
		t5.style.display = "none";
	}
}
function check13()
{
	var t5 = document.getElementById("t13");
	var c5 = document.getElementById("checkbox13");
	if(c5.checked == true)
		{
			t5.style.display = "inline-block";
			
			 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
		}
	else {
		t5.style.display = "none";
	}
}
function deschide2()
{
	
	
	 const overlay = document.getElementById('overlay')
                    const modal =document.getElementById('modal')
                    modal.classList.add('active')
                    overlay.classList.add('active')
	
	
}
