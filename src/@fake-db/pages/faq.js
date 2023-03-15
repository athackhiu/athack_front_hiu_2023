import mock from '../mock'
const data = {
  faqData: {
    // payment
    payment: {
      icon: 'CreditCard',
      title: 'Notre équipe',
      subtitle: '',
      qandA: [
        {
          question: 'Qui êtes vous?',
          ans: 'Nous sommes l’équipe At-Hack étudiant à L’ITUniversity.'
        },
        {
          question: 'Qui sont les membres de votre équipe?',
          ans: 'Notre équipe est composée de 5 personnes. Tsanta, Cédric, Hariaja, Liantsoa et Ericka.'
        },
        {
          question: 'Comment vous vous êtes rencontrées?',
          ans: 'Lors d une pause café, nous nous sommes  retrouvés à la même table et ont commencé à échanger sur leur connaissance respective. Nous avons réalisé que nos compétences étaient complémentaires et qu il serait intéressant de travailler ensemble sur un projet commun.'
        },
        {
          question: 'Quel est le rôle des chacun dans votre équipe ? ',
          ans: 'Tsanta est notre développeur back-End , Cédric est notre développeur back-End et intégrateur, Hariaja est notre designer , Liantsoa dévoloppeur front-End et gestionnaire de la communication et Ericka développeur front-End et créateur d’idées'
        }
      
      ]
    },
    // delivery
    delivery: {
      icon: 'ShoppingBag',
      title: 'Bot Lili',
      subtitle: '',
      qandA: [
        {
          question: 'Lili c’est quoi ?',
          ans: 'Lili est une  assistante vocale qui sera à votre disposition pour répondre à toutes vos interrogations.'
        },
        {
          question:
            'Comment Lili fonctionne t-elle?',
          ans: 'Pour entamer une conversation avec Lili, vous devez tout d abord cliquer sur l icône située en bas à droite de la plateforme. Ensuite, vous avez le choix entre saisir votre message au clavier ou le dicter à voix haute pour qu il soit transformé en texte. Lili vous répondra ensuite rapidement.'
        },
        {
          question: 'Pourquoi discuter avec Lili?',
          ans: 'La raison pour laquelle nous échangeons avec Lili est d améliorer notre orientation sur la plateforme et de rendre notre site plus automatisé.'
        }
      ]
    },
    // product and services
    productServices: {
      icon: 'Settings',
      title: 'Notre plateforme',
      subtitle: '',
      qandA: [
        {
          question: 'How can I register a complaint against the courier executive who came to deliver my order?',
          ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
        },
        {
          question: 'The status for my shipment shows as ‘not picked up’. What do I do?',
          ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
        },
        {
          question: 'How can I get a proof of delivery for my shipment?',
          ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
        },
        {
          question: 'How can I avail your services?',
          ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
        }
      ]
    }
  }
}

mock.onGet('/faq/data').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()

  const filteredData = {}

  Object.entries(data.faqData).forEach(entry => {
    const [categoryName, categoryObj] = entry
    const filteredQAndAOfCategory = categoryObj.qandA.filter(qAndAObj => {
      return qAndAObj.question.toLowerCase().includes(queryLowered)
    })
    filteredData[categoryName] = {
      ...categoryObj,
      qandA: filteredQAndAOfCategory.length ? filteredQAndAOfCategory : []
    }
  })

  return [200, filteredData]
})
