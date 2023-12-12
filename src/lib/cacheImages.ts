interface Project {
  title: string
  image: string
  link: string
  description: string
  technologies: string[]
}
export const cacheImages = async (projects: Project[]) => {
  const cache = await window.caches.open('image-cache')

  const requests = projects.map(async (project) => {
    try {
      const response = await fetch(project.image)
      await cache.put(project.image, response)
    } catch (error) {
      console.error('Erro ao armazenar a imagem em cache:', error)
    }
  })

  await Promise.all(requests)
}
