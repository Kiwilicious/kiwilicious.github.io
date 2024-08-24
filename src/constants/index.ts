export type ProjectData = {
  title: string
  description: string
  projectLink?: string
  repoLink: string
}

export const projectData: ProjectData[] = [
  {
    title: 'Map of Japan',
    description:
      'A Map of Japan rendered in D3. Cycles through average monthly temperature, broken down by prefecture.',
    projectLink: 'https://mapofjapan.azurewebsites.net/',
    repoLink: 'https://dev.azure.com/Kiwilicious/_git/Project%20Sapphire',
  },
  {
    title: 'Web Scrapper',
    description:
      'Python web scrapper targetting the JMA (Japan Meteorological Agency) site. Used to gather temperature data for the map project.',
    repoLink: 'https://github.com/Kiwilicious/JMA-scrapper-py',
  },
  {
    title: 'React TTT',
    description: 'TicTacToe game made with React using TailwindCSS and SVGs.',
    projectLink: 'https://kiwilicious.github.io/react-ttt/',
    repoLink: 'https://github.com/Kiwilicious/react-ttt',
  },
  {
    title: 'Reading Corner',
    description:
      'Jekyll site hosting light novels translated by yours truely. Used Staticman to handle comments. Something I need to stop being lazy and get back into.',
    projectLink: 'https://kiwilicious.github.io/reading-corner/',
    repoLink: 'https://github.com/Kiwilicious/reading-corner',
  },
  {
    title: 'Old Site',
    description: 'An earlier rendition of the site that was made with Gatsby.',
    repoLink: 'https://github.com/Kiwilicious/old-site',
  },
  {
    title: 'Tinychat',
    description: 'POC chat app written in jQuery and WebSockets',
    repoLink: 'https://github.com/Kiwilicious/tinychat',
  },
  {
    title: 'Customer Records',
    description: 'Code to filter out customers within 100km of a location',
    repoLink: 'https://github.com/Kiwilicious/customer-records',
  },
]
