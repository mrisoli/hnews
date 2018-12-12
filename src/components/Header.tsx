import Link from "next/link";

import logo from "../../static/hacker-news.png";

export default () => (
  <header>
    <div className="logo-nav">
      <Link href="/"><a><img className="logo" src={logo} /></a></Link>
      <Link href="https://news.ycombinator.com/login"><a>Login</a></Link>
    </div>
    <nav>
      <ul>
      <li><Link href="https://news.ycombinator.com/newest"><a>new</a></Link></li>
      <li><Link href="https://news.ycombinator.com/comments"><a>comments</a></Link></li>
      <li><Link href="https://news.ycombinator.com/show"><a>show</a></Link></li>
      <li><Link href="https://news.ycombinator.com/ask"><a>ask</a></Link></li>
      <li><Link href="https://news.ycombinator.com/jobs"><a>jobs</a></Link></li>
      <li><Link href="https://news.ycombinator.com/submit"><a>submit</a></Link></li>
      </ul>
    </nav>
  </header>
);
