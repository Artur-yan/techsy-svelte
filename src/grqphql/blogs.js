
export const GET_HOMEPAGE_BLOGS = `
query FetchHomepageBlogs($language: String) {
  articles(limit:3, filter: { _and:[
    {translations: { languages_id: { code:{_eq: $language }} }},
    {status: {_eq: "published"}}
    ]}) {
    status
    date_created
    time_to_read
    image{
      id
    }
    translations(filter: { languages_id: { code:{_eq: $language }} }){
        title
        slug
        languages_id{
            name
        }
    }
  }
}`;



export const GET_ALL_BLOGS = `
query FetchHomepageBlogs($language: String) {
  articles(filter: { _and:[
    {translations: { languages_id: { code:{_eq: $language }} }},
    {status: {_eq: "published"}}
    ]}) {
    status
    date_created
    time_to_read
    image{
      id
    }
    translations(filter: { languages_id: { code:{_eq: $language }} }){
        title
        slug
        languages_id{
            name
        }
    }
  }
}`;

/*
---OLD---
export const GET_HOMEPAGE_BLOGS = `
query FetchHomepageBlogs($language: String) {
    Article(limit: 3, filter: { _and: [{status: {_eq: "published"}}, {is_hompage_blog: { _eq: true}}, {language: { _eq: $language}}]}) {
      title
      slug
      time_to_read
      date_created
      image {
        id
      }
      language
    }
  }`;
  */



export const GET_BLOG = `
query FetchBlog($slug: String = "", $language: String) {
    articles(filter: { _and:[
      { translations: { slug: {_eq: $slug }}},
      { translations: { languages_id: { code:{_eq: $language }}}},
      { status: {_eq: "published"}}
    ]}) {
      status
      date_created
      time_to_read
      image{
          id
      }
      user_created {
          first_name
          last_name
          avatar {
          id
          }
      }
    translations{
          title
          slug
          short_description
          languages_id{
              name
              code
          }
          keywords
          quote
          meta_title
          meta_description
          meta_tag
    }
  }
}`;

export const GET_CONTENT = `
query FetchBlog($slug: String = "", $language: String) {
    articles(filter: { _and:[
      { translations: { slug: {_eq: $slug }}},
      { translations: { languages_id: { code:{_eq: $language }}}},
      { status: {_eq: "published"}}
    ]}) {
    translations(filter: { languages_id: { code:{_eq: $language }} }){
      content
    }
  }
}`;


export const GET_FEATURED_BLOG = `
query FetchFeaturedBlogs($language: String) {
  articles(limit:1, filter: { _and:[
    {translations: { languages_id: { code:{_eq: $language }} }},
    {status: {_eq: "published"}},
    {is_featured: { _eq: true}}
    ]}) {
    status
    date_created
    time_to_read
    image{
            id
        }
    translations(filter: { languages_id: { code:{_eq: $language }} }){
      title
      slug
      short_description
      languages_id{
          name
      }
    }
}
}`;



/*
  quote
  keywords {
      blog_keywords_id {
        id
        name
      }
    }


export const GET_FEATURED_BLOG = `
query FetchFeaturedBlogs($language: String) {
  Article(limit: 1, filter: { _and: [{status: {_eq: "published"}}, {is_featured: { _eq: true}}, {language: { _eq: $language}}]}) {
      title
      slug
      time_to_read
      date_created
      short_description
      image {
        id
      }
    }
  }`;
  */
/*
export const GET_ALL_BLOG = `
query FetchAllBlogs($language: String) {
  Article(filter: { _and: [{status: {_eq: "published"}}, {is_featured: { _eq: false}}, {language: { _eq: $language}}]}) {
      title
      slug
      time_to_read
      date_created
      image {
        id
      }
    }
  }`;
  */
