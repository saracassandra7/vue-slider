/*Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
- al click su una thumb, visualizzare in grande l’immagine corrispondente
- aggiungere la classe active alla thumb attiva*/

const {createApp} = Vue;

createApp({
  data(){
    return{
      images: [
        {
          name: 'Svezia',
          url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
          caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, harum dolores voluptas amet distinctio et.'
        },
        {
          name: 'Perù',
          url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
          caption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nihil expedita nostrum fugit laudantium illum?'
        },
        {
          name: 'Chile',
          url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
          caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit distinctio dignissimos eius, fugiat libero.'
        },
        {
          name: 'Argentina',
          url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
          caption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio facere praesentium expedita eaque aut molestias?'
        },
        {
          name: 'Colombia',
          url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
          caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque consequuntur dignissimos recusandae labore. Aperiam?'
        }
      ],
      activeImage : 0,
    }
  },
  methods:{
    changeImg(index){
      this.activeImage = index;
    },

    nextPrev(isNext){
      if (isNext) this.activeImage++
      else this.activeImage--

      //verifico che il contatore non vada sotto lo zero o oltre il numero di elementi
      if(this.activeImage === this.images.length){
        this.activeImage = 0;
      } else if (this.activeImage < 0){
        this.activeImage = this.images.length -1;
      }
    },

  }
}).mount('#app')