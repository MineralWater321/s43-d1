//Mock Data
let posts = [];
//id property
let count = 1;

//Add post data
document.querySelector('#form-add-post').addEventListener('submit', (e) => {
    //Prevents the page from loading
    e.preventDefault();
    
    
    posts.push({
        id: count,
        title: document.querySelector('#txt-title').value,
        body: document.querySelector('#txt-body').value
    });

    count ++;
    showPosts(posts);
    alert('Successfully added post');
});

//Show posts
const showPosts = (posts) => {
    let postEntries = '';

    posts.forEach((post) => {
        postEntries += `
            <div id="post-${post.id}">
                <h3 id="post-title-${post.id}">${post.title}</h3>
                <p id="post-body-${post.id}">${post.body}</p>
                <button onclick="editPost('${post.id}')">Edit</button>
                <button onclick="deletePost('${post.id}')">Delete</button>
            </div>
        `;
    });

    document.querySelector('#div-post-entries').innerHTML = postEntries;
}

//Edit post
const editPost = (id) => {
    let title = document.querySelector(`#post-title-${id}`).innerHTML;
    let body = document.querySelector(`#post-body-${id}`).innerHTML;

    document.querySelector('#txt-edit-id').value = id;
    document.querySelector('#txt-edit-title').value =  title;
    document.querySelector('#txt-edit-body').value = body;
}


//Update post
document.querySelector('#form-edit-post').addEventListener('submit', (e) => {
    e.preventDefault();

    for(let i=0; i < posts.length; i++){
        if(posts[i].id.toString() === document.querySelector('#txt-edit-id').value)
            {
                posts[i].title = document.querySelector('#txt-edit-title').value;
                posts[i].body = document.querySelector('#txt-edit-body').value;

                showPosts(posts);
                alert('Successfully updated');

                break;
        }
    }
})