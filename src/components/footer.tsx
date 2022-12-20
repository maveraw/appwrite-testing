import packageJson from "../../package.json"

export default function Footer() {
  return (
    <footer>
      <p>Example built by</p>
      <a href="https://ticianomorvan.me" target="_blank" rel="noreferrer">
        Ticiano Morvan
      </a>
      <p>on top of Appwrite SDK {packageJson.dependencies.appwrite}</p>
    </footer>
  )
}