const Articles = new Mongo.Collection("articles");

Meteor.methods({
  listeArticles: ()=>{
    // throw new Meteor.Error(500, "Désolé nous n'avons pas réussi à récupérer les articles");
    return Articles.find().fetch();
  },
  getArticle: (titre)=>{
    return Articles.findOne({title: titre});
  },
  saveArticle: (obj)=> {
    if(Meteor.userId()){
      if(obj.title.length <=1){
        throw new Meteor.Error("Le titre est obligatoire");
      } else if(obj.description.length <= 10){
        throw new Meteor.Error("La description doit faire 10 caractères au minimum");
      }
      Articles.insert(obj);
    } else {
      throw new Meteor.Error("Il faut être connecté pour enregistrer un article");
    }


  },
  removeArticle(id){
    Articles.remove(id);
  },
  userInfo(id){
    const result = Meteor.users.findOne({_id: id});
    if(result){
      console.log(result);
      return result;
    } else {
      throw new Meteor.Error(500, 'Utilisateur non trouvé')
    }
  }

});
