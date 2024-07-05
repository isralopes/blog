import { Post } from './components/Post';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import './global.css'
import styles from './App.module.css';


const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/isralopes.png',
      name: 'Israel Lopes',
      role: 'Developer'
    },
    content: [
      {
        type: 'paragraph', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },
      {
        type: 'paragraph', content: ' ola Mundo'
      },
      {
        type: 'link', content: '#'
      }
    ],
    publish: new Date('2022-26-01 19:02:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/isralopes.png',
      name: 'Israel Lopes',
      role: 'Developer'
    },
    content: [
      {
        type: 'paragraph', content: 'Isra Lopes'
      },
      {
        type: 'paragraph', content: ' Vamos São Paulo'
      },
      {
        type: 'link', content: '#'
      }
    ],
    publishedAt: new Date('2022-26-01 19:02:00')
  }
]

/* const a = [{
  b: "test",
  c: 2
},
{
  b: "test",
  c: 2
}

]

console.log(a[1].b)
 */


export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <SideBar />

        <main>
          {post.map(posts => {
            return (
              <Post
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publish={posts.publish}

              />
            )

          })}

        </main>
      </div>

    </div>

  )
}

export default App
