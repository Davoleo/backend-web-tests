/********************
 *  Coded By Davoleo
 ********************/

const mongoose = require("mongoose");
const Anime = require("./models/anime");
const Comment   = require("./models/comment");

const data = [
    {
        name: "Fruits Basket Season 2",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111762-VsqqGAy7bdE1.jpg",
        description: "The second season of Fruits Basket.\n" +
            "A year has passed since Tohru Honda began living in the Souma residence, and she has since created stronger relationships with its inhabitants Shigure, Kyou, and Yuki. She has also grown closer to the rest of the Souma family and has become familiar with their ancestral secret, having helped them with many of their personal issues. The closer Tohru gets, however, the more she begins to realize that their secret holds a darker truth than she first presumed.\n" +
            "Summer is approaching and Tohru is invited to spend her days with the Soumas, mainly Kyou and Yuki. Tohru wishes for an easy-going vacation, but her close relationships with the two boys and the rest of the Soumas may prove to cause trouble. As they grow more intimate, their carefree time together is hindered by older hardships and feelings from the past that begin to resurface. The Eternal Banquet also dawns on the members of the zodiac, and they must tend to their duties alongside the unnerving head of the family, Akito Souma.\n" +
            "With the banquet approaching and a plethora of feelings to be solved, will Tohru's life with the Soumas remain peaceful, or will she find herself in a situation from which she cannot escape?"
    },
    {
        name: "Food Wars! The Fifth Plate",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114043-6bOULvSMGXa3.jpg",
        description: "The fifth season of Shokugeki no Souma.\n" +
            "Yukihira Souma has been helping out his family diner, honing his skills. With his father's recommendation, he decides to enroll into \"Totsuki Saryo Culinary Institute\", a school for the most elites of the culinary world. During his time there, he has grown so much as a chef through studying hard with friends and competing against rivals in shokugeki battles.\n" +
            "Souma has now moved up a grade and he has finally grasped what he has always hoped for; the first seat at the Totsuki Ten Masters Council.\n" +
            "In the meantime, an invitation to a world-class cooking competition known as \"BLUE\" arrives to Totsuki. \"BLUE\" is one of the most authentic gastronomic tournaments for young chefs seeking fame. However, there's been a change to this year's system and themes are all out of ordinary!"
    },
    {
        name: "Grimgar of Fantasy and Ash",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21428-dFVIHeZ8McBe.jpg",
        description: "Living, isn't easy.\n" +
            "When Haruhiro awakens, he's in the dark.\n" +
            "He doesn't know where he is, why is he here, and where he came from.\n" +
            "Around him there are several men and women who have the same circumstances.\n" +
            "Together, they advance forward away from the darkness, and a world they've never seen before called \"Grimgar\" spreads out before them.\n" +
            "Memories, money, special powers — This is the reality we who have none of those things have obtained."
    },
    {
        name: "Angels of Death",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99629-BXyAJ6PDq4sr.jpg",
        description: "13-year old Rachel awakens to find herself trapped in the basement of an abandoned building. Without any memories, or even a clue as to where she could be, she wanders the building, lost and dizzy. In her search, she comes across a mancovered in bandages. He introduces himself as Zack and he wields a grim-reaper like sickle.\nA strange bond is struck between them, strengthened by strange, crazy promises…\nThese two, trapped in this strange building, don't know why fate has placed them there. But they will work together desperately to find a way out…"
    },
    {
        name: "Overlord",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20832-Kz7PMdGT0JI6.jpg",
        description: "The story takes place in the\n" +
            " year 2138 when virtual reality gaming is booming. Yggdrasil, a popular online game is quietly shut down one day. However, the protagonist Momonga decides to not log out. Momonga is then transformed into the image\n" +
            "of a skeleton as \"the mostpowerful wizard.\" The world continues to change, with non-player characters (NPCs) beginning to feel emotion. Having no parents, friends, or place in society, this ordinary young man Momonga then strives to take over the new world the game has become."
    }
]

function seedDB(){
    //Remove all anime
    Anime.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
            //add default anime
            data.forEach(function(seed){
                Anime.create(seed, function(err, anime){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a new anime");
                        //create a comment
                        Comment.create(
                            {
                                text: "Test Comment, pretty epic comment",
                                author: "TestUser"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    anime.comments.push(comment);
                                    anime.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    });
    //add a few comments
}

module.exports = seedDB;