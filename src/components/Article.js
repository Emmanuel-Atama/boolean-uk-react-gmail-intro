import ArticleHeader from "./ArticleHeader"
import DivTitle from "./DivTitle"
import SectionEmailActions from "./SectionEmailActions"
import SectionEmailBody from "./SectionEmailBody"

function Article() {
return(
    <article className="email-content">
          <DivTitle />
          <ArticleHeader />
          <SectionEmailBody />
        <SectionEmailActions />
        </article>
)
}
export default Article