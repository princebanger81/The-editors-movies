const movieData = [
    {
      title: "Stree 2: Sarkate Ka Aatank",
      director: "Amar Kaushik",
      releaseDate: "2024-08-15",
      imageUrl: "https://yt3.ggpht.com/8XcumKLrdgS9aqZYgHidzqcstVg5PZBkQotsldvX8EkYfwkibD0w1Y4CeLD_26KNUA9nQwnLKOXjSg=s840-rw-nd-v1",
      description: "Stree 2 is the highly anticipated sequel to the 2018 horror-comedy Stree. The film continues the eerie yet humorous journey in the small town of Chanderi, where the legend of the ghostly woman, Stree, continues to haunt the residents. This time, the mystery deepens as the characters face new supernatural challenges, leading to a thrilling and unpredictable storyline. With a mix of spine-chilling horror, witty comedy, and social commentary, Stree 2 promises to keep audiences on the edge of their seats while delivering a strong message wrapped in humor and horror. The movie features returning stars Rajkummar Rao and Shraddha Kapoor, along with new faces that add fresh dynamics to the narrative. Directed by Amar Kaushik, Stree 2 is a must-watch for fans of the genre who enjoyed the unique blend of scares and laughs in the original film.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "7.8",
      cast: "Rajkummar Rao"
    },
    {
      title: "Movie 2",
      director: "Director 2",
      releaseDate: "2024-09-02",
      imageUrl: "https://www.example.com/path-to-your-image2.jpg",
      description: "Description for Movie 2.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "6.8",
      cast: "Actor 2, Actress 2"
    },
    {
      title: "Movie 3",
      director: "Director 3",
      releaseDate: "2024-09-03",
      imageUrl: "https://www.example.com/path-to-your-image3.jpg",
      description: "Description for Movie 3.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "7.0",
      cast: "Actor 3, Actress 3"
    },
    {
      title: "Khel Khel Me",
      director: "Director 4",
      releaseDate: "2024-08-15",
      imageUrl: "https://yt3.ggpht.com/jWVYD_nKzOdTImusckcd9VW21HLRxjaiCDy5tNoVYlIqO99FZQM5SvNGYc7HS1JkzMBGISvcRPPqSg=s1140-rw-nd-v1",
      description: "Description for Movie 4.",
      videoUrl: "https://drive.google.com/file/d/10V9txhzTJZ6rQEh4ZCwgQ9wwlMwwoI1U/preview",
      imdbRating: "8.0",
      cast: "Actor 4, Actress 4"
    },
    {
      title: "Movie 5",
      director: "Director 5",
      releaseDate: "2024-09-04",
      imageUrl: "https://www.example.com/path-to-your-image5.jpg",
      description: "Description for Movie 5.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "7.2",
      cast: "Actor 5, Actress 5"
    },
    {
      title: "Movie 6",
      director: "Director 6",
      releaseDate: "2024-09-05",
      imageUrl: "https://www.example.com/path-to-your-image6.jpg",
      description: "Description for Movie 6.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "6.9",
      cast: "Actor 6, Actress 6"
    },
    {
      title: "Movie 7",
      director: "Director 7",
      releaseDate: "2024-09-06",
      imageUrl: "https://www.example.com/path-to-your-image7.jpg",
      description: "Description for Movie 7.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "8.1",
      cast: "Actor 7, Actress 7"
    },
    {
      title: "Movie 8",
      director: "Director 8",
      releaseDate: "2024-09-07",
      imageUrl: "https://www.example.com/path-to-your-image8.jpg",
      description: "Description for Movie 8.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "7.4",
      cast: "Actor 8, Actress 8"
    },
    {
      title: "Movie 9",
      director: "Director 9",
      releaseDate: "2024-09-08",
      imageUrl: "https://www.example.com/path-to-your-image9.jpg",
      description: "Description for Movie 9.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "6.7",
      cast: "Actor 9, Actress 9"
    },
    {
      title: "Movie 10",
      director: "Director 10",
      releaseDate: "2024-09-09",
      imageUrl: "https://www.example.com/path-to-your-image10.jpg",
      description: "Description for Movie 10.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "7.3",
      cast: "Actor 10, Actress 10"
    },
    {
      title: "Movie 11",
      director: "Director 11",
      releaseDate: "2024-09-10",
      imageUrl: "https://www.example.com/path-to-your-image11.jpg",
      description: "Description for Movie 11.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "8.2",
      cast: "Actor 11, Actress 11"
    },
    {
      title: "Movie 12",
      director: "Director 12",
      releaseDate: "2024-09-11",
      imageUrl: "https://www.example.com/path-to-your-image12.jpg",
      description: "Description for Movie 12.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "7.0",
      cast: "Actor 12, Actress 12"
    },
    {
      title: "Movie 13",
      director: "Director 13",
      releaseDate: "2024-09-12",
      imageUrl: "https://www.example.com/path-to-your-image13.jpg",
      description: "Description for Movie 13.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "7.8",
      cast: "Actor 13, Actress 13"
    },
    {
      title: "Movie 14",
      director: "Director 14",
      releaseDate: "2024-09-13",
      imageUrl: "https://www.example.com/path-to-your-image14.jpg",
      description: "Description for Movie 14.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "6.6",
      cast: "Actor 14, Actress 14"
    },
    {
      title: "Movie 15",
      director: "Director 15",
      releaseDate: "2024-09-14",
      imageUrl: "https://www.example.com/path-to-your-image15.jpg",
      description: "Description for Movie 15.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "7.9",
      cast: "Actor 15, Actress 15"
    },
    {
      title: "Movie 16",
      director: "Director 16",
      releaseDate: "2024-09-15",
      imageUrl: "https://www.example.com/path-to-your-image16.jpg",
      description: "Description for Movie 16.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "8.0",
      cast: "Actor 16, Actress 16"
    },
    {
      title: "Movie 17",
      director: "Director 17",
      releaseDate: "2024-09-16",
      imageUrl: "https://www.example.com/path-to-your-image17.jpg",
      description: "Description for Movie 17.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "7.6",
      cast: "Actor 17, Actress 17"
    },
    {
      title: "Movie 18",
      director: "Director 18",
      releaseDate: "2024-09-17",
      imageUrl: "https://www.example.com/path-to-your-image18.jpg",
      description: "Description for Movie 18.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "6.5",
      cast: "Actor 18, Actress 18"
    },
    {
      title: "Movie 19",
      director: "Director 19",
      releaseDate: "2024-09-18",
      imageUrl: "https://www.example.com/path-to-your-image19.jpg",
      description: "Description for Movie 19.",
      videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
      imdbRating: "7.7",
      cast: "Actor 19, Actress 19"
    },
    {
        title: "Movie 20",
        director: "Director 20",
        releaseDate: "2024-09-19",
        imageUrl: "https://www.example.com/path-to-your-image20.jpg",
        description: "Description for Movie 20.",
        videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
        imdbRating: "7.1",
        cast: "Actor 20, Actress 20"
    },
    {
        title: "Movie 21",
        director: "Director 21",
        releaseDate: "2024-09-20",
        imageUrl: "https://www.example.com/path-to-your-image21.jpg",
        description: "Description for Movie 21.",
        videoUrl: "https://drive.google.com/file/d/19u9AXaZmTypQ_nuvHH-91JXyf04ia3vT/preview",
        imdbRating: "7.4",
        cast: "Actor 21, Actress 21"
    }
];