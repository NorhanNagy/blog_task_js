const posts = [
    {
      title: 'Post #1',
      date: 'March 17, 2022',
      author: 'Ahmad',
      contents:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: 'Post #2',
      date: 'March 16, 2022',
      author: 'Yasser',
      contents:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: 'Post #3',
      date: 'March 15, 2022',
      author: 'Andrew',
      contents:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  
  
  
  let Title = document.getElementsByClassName('blog-post-title');
  let Date = document.getElementsByClassName('date');
  let Author = document.getElementsByClassName('author');
  let Content = document.getElementsByClassName('content');
  
  for (let post in posts){
    Title[post].innerText = posts[post].title;
    Date[post].innerText = posts[post].date;
    Author[post].innerText = posts[post].author;
    Content[post].innerText = posts[post].contents;
  }