function createWork(work) {
    $("#deleteform").prepend(`<div class="eachwork" id="${work._id}">
          <small class="delete"><input type="checkbox" name="check" value="${work._id}"></small><small class='category ${work.category}'>${work.category}</small><small class="info">${work.info}</small><small class="date">${work.date}</small></div>`);
    document.getElementById("newpostform").reset();
}



function deleteDOM(work) {

    if (typeof (work) == 'string') {
        $(`#${work}`).remove();//if only one checkbox is checked then recived data will be type of string 
    } else {
        for (let i of work) {
            //if multiple checkbox is checked then recived data will be inthe form of object 
            //so delete the each object by traversing through the object
            $(`#${i}`).remove();
        }
    }



}



$("#addTast").click(function (event) {
    event.preventDefault();//preventing the default function of addTast button
    let newpostform = $('#newpostform');

    $.ajax({
        type: 'POST',
        url: '/todo/create',
        data: newpostform.serialize(),
        success: function (data) {
            createWork(data.work);
        },
        error: function () {
            console.log(error.responseText);
        }
    })

})








$("#deleteTast").click(function (event) {
    event.preventDefault();
    let newpostform = $('#deleteform');

    $.ajax({
        type: 'POST',
        url: '/todo/delete',
        data: newpostform.serialize(),
        success: function (data) {
            deleteDOM(data.work);//calling the deleteDOM function with data recived from hxr request

        },
        error: function () {
            console.log(error.responseText);
        }
    })

})