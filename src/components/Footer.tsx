import Link from "next/link";
import SearchForm from "./SearchForm";

export default () => (
    <footer>
      <ul>
        <li><Link href="https://news.ycombinator.com/newsguidelines.html"><a>Guidelines</a></Link></li>
        <li><Link href="https://news.ycombinator.com/newsfaq"><a>FAQ</a></Link></li>
        <li><Link href="mailto:hn@ycombinator.com"><a>Support</a></Link></li>
        <li><Link href="https://github.com/HackerNews/API"><a>API</a></Link></li>
        <li><Link href="https://news.ycombinator.com/security.html"><a>Security</a></Link></li>
        <li><Link href="https://news.ycombinator.com/lists"><a>Lists</a></Link></li>
        <li><Link href="https://news.ycombinator.com/bookmarklet.html"><a>Bookmarklet</a></Link></li>
        <li><Link href="https://news.ycombinator.com/legal"><a>Legal</a></Link></li>
        <li><Link href="https://news.ycombinator.com/apply"><a>Apply to YC</a></Link></li>
        <li><Link href="mailto:hn@ycombinator.com"><a>Contact</a></Link></li>
      </ul>
      <SearchForm />
    </footer>
);
