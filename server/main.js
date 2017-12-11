const Articles = new Mongo.Collection("articles");
const Profiles = new Mongo.Collection("profiles");

Meteor.methods({
  listeArticles: ()=>{
    // throw new Meteor.Error(500, "Désolé nous n'avons pas réussi à récupérer les articles");
    return Articles.find().fetch();
  },
  saveArticle: (obj)=> {

      if(obj.title.length <=1){
        throw new Meteor.Error("Le titre est obligatoire");
      } else {

        Articles.insert(obj);
      }



  },
  removeArticle:(id) => {
    Articles.remove(id);
    console.log("supprimé")
  },
  userInfo(id){
    const result = Meteor.users.findOne({_id: id});
    if(result){
      console.log(result);
      return result;
    } else {
      throw new Meteor.Error(500, 'Utilisateur non trouvé')
    }
  },


  listeProfile: ()=>{
    // throw new Meteor.Error(500, "Désolé nous n'avons pas réussi à récupérer les articles");
    return Profiles.find().fetch();
  },
  saveProfile: (obj)=> {

      if(obj.title.length <=1){
        throw new Meteor.Error("Le titre est obligatoire");
      } else {

        Profiles.insert(obj);
        console.log(obj);
      }



  },
  removeProfile:(id) => {
    Profiles.remove(id);
    console.log("supprimé")
  },

});
