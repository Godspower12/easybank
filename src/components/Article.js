import Currency from "../Assets/images/image-currency.jpg";
import Meal from "../Assets/images/image-restaurant.jpg"
import Plane from "../Assets/images/image-plane.jpg"
import Confetti from "../Assets/images/image-confetti.jpg"



export const Articlez = ()  => {

const data = [
{  
image : Currency,
author : "By Claire Robbinson",
title : "Receive money in any currency with no fees",
sub: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
    },
{  
image : Meal,
author : "By Wilson Hutton",
title : "Treat yourself without worrying about money",
sub: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
    },
{  
image : Plane,
author : "By Wilson Hutton",
title : "Treat yourself without worrying about money",
sub: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
    },
{  
image : Confetti,
author : "By Claire Robbinson",
title : "Our invite-only Beta accounts are now live!",
sub: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
    }

  
]

const listItems = data.map((Article, index) => {
    return (
        <div className='articles-wrapper' key={index}>
          <div className="articles" key={index}>
            <div className="article-img">
            <img src= {Article.image} alt="images" />
            </div>
           <div className="article-contents">
           <p>{Article.author}</p>
          <h3>{Article.title}</h3>
          <p>{Article.sub}</p>
           </div>
          </div>
          
          </div>


    );
});
return (
<div className="lists">
<h1>Latest articles</h1>
<div className="container">
    {listItems}
    </div>
</div>)

}
