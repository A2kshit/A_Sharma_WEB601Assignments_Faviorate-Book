import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from "../content-card/content-card.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [ContentCardComponent,CommonModule]
})
export class ContentListComponent implements OnInit{
  sportsContent: Content[];
  constructor(){
    this.sportsContent=[];
  }

  ngOnInit(): void {
    
  
   this.sportsContent =[
    {
      id:1,
      "title": "The God of Small Things",
      "description": "Immerse yourself in Arundhati Roy's intricate narrative set in Kerala, India. 'The God of Small Things' weaves a poignant tale of forbidden love, societal constraints, and the impact of a tragic incident on the lives of two twins.",
      "imgUrl": "https://m.media-amazon.com/images/I/61ACfrLK0EL._AC_UF1000,1000_QL80_.jpg",
      "creator": "Arundhati Roy",
      type: "Fiction, Family Drama"
    },
    {
      id:2,
      "title": "The Immortals of Meluha",
      "description": "Embark on an epic journey with Shiva, a Tibetan tribal leader, as he discovers his destiny as the savior of the ancient land of Meluha. Amish Tripathi's 'The Immortals of Meluha' combines mythology, fantasy, and adventure in a gripping narrative.",
      "imgUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhS74srs10yxqd57vWrNipRAEXeYZCJPl0FImAKW4g0q9rZvlLk-i9b-Ksp5qKWTvmZzZ3kg57DMu1Yee_4li2r4aLjdiSOur1O1m03nV-4cDKU6GrPm6TEzTIHE-Pxl1YItmuhzUz7Vk7849gu6WbapIuQoh8QOu_n_blVAL0_2omCN2COVXJ0XEprMgM/w1200-h675-p-k-no-nu/The%20Immortals%20of%20Meluha.jpg",
      "creator": "Amish Tripathi",
      type: "Mythological Fiction"
    },
    
    {
      id:3,
      "title": "To Kill a Mockingbird",
      "description": "Harper Lee's timeless classic, 'To Kill a Mockingbird,' unfolds in the racially charged American South. Through the eyes of Scout Finch, the novel explores themes of justice, moral growth, and compassion in the face of prejudice and injustice.",
      "imgUrl": "https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780060935467/primary/renditions/700",
      "creator": "Harper Lee",
      type: "Mythological Fiction", 
    },
    {
      id:4,
      "title": "The God of Small Things",
      "description": "Immerse yourself in Arundhati Roy's intricate narrative set in Kerala, India. 'The God of Small Things' weaves a poignant tale of forbidden love, societal constraints, and the impact of a tragic incident on the lives of two twins.",
      "imgUrl": "https://m.media-amazon.com/images/I/61ACfrLK0EL._AC_UF1000,1000_QL80_.jpg",
      "creator": "Arundhati Roy",
      type: "Classic, Legal Drama"
    },
    {
      id:5,
      "title": "The Immortals of Meluha",
      "description": "Embark on an epic journey with Shiva, a Tibetan tribal leader, as he discovers his destiny as the savior of the ancient land of Meluha. Amish Tripathi's 'The Immortals of Meluha' combines mythology, fantasy, and adventure in a gripping narrative.",
      "imgUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhS74srs10yxqd57vWrNipRAEXeYZCJPl0FImAKW4g0q9rZvlLk-i9b-Ksp5qKWTvmZzZ3kg57DMu1Yee_4li2r4aLjdiSOur1O1m03nV-4cDKU6GrPm6TEzTIHE-Pxl1YItmuhzUz7Vk7849gu6WbapIuQoh8QOu_n_blVAL0_2omCN2COVXJ0XEprMgM/w1200-h675-p-k-no-nu/The%20Immortals%20of%20Meluha.jpg",
      "creator": "Amish Tripathi",
      type: "Fiction, Family Drama"
    },
    
    {
      id:6,
      "title": "To Kill a Mockingbird",
      "description": "Harper Lee's timeless classic, 'To Kill a Mockingbird,' unfolds in the racially charged American South. Through the eyes of Scout Finch, the novel explores themes of justice, moral growth, and compassion in the face of prejudice and injustice.",
      "imgUrl": "https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780060935467/primary/renditions/700",
      "creator": "Harper Lee",
      type: "Classic, Legal Drama", 
    },
    
  ];

}
}
