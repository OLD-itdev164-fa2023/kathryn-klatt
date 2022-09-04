const path = require(`path`);
exports.createPages = ({graphql, actions})=>{
  const{createPage} = actions;
  return new Promise((resolve, reject)=> {
    graphyql(
    // Query
    ).then(result=>{
      if (result.errors){
        reject(result.errors);
      }
      result.data.allContentful/*BlogPost*/.edges.forEach((edge)=>{
        createPage({
          path: edge.node.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: edge.node.slug
          }
        })
      })
      resolve();
    })
  });
};
