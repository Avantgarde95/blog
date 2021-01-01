(self.webpackChunk=self.webpackChunk||[]).push([[536],{536:function(e){e.exports={html:'<p>웹페이지에서 iframe의 src를 변경하면 브라우저의 히스토리가 변경될 수 있다. 이를 방지하는 방법 중 하나는, src가 변경되면 iframe 요소를 지우고 새로 렌더링하는 것이다.\n만약 <a target="_blank" rel="noopener noreferrer"  href="https://reactjs.org/">리액트</a>를 사용중이라면,\n<a target="_blank" rel="noopener noreferrer"  href="https://reactjs.org/docs/lists-and-keys.html">key</a>를 사용하여 간단하게 해결할 수 있다.</p>\n<p>If you change the src of iframe, the browser history can be modified. One of the methods to prevent this is to delete\nthe iframe element and render a new one when the src is changed. If you are using <a target="_blank" rel="noopener noreferrer"  href="https://reactjs.org/">React</a>, it can\nbe solved simply by using the <a target="_blank" rel="noopener noreferrer"  href="https://reactjs.org/docs/lists-and-keys.html">key</a>.</p>\n<p>예를 들어, 아래 코드를 사용하여 유튜브 비디오를 표시하려고 한다. 이 때 새로운 비디오를 렌더링하고자 기존과 다른 <code>id</code>의 값을 주면, 기존에 렌더링된 iframe 요소는 그대로 남아있고 src만 변경되므로\n브라우저 히스토리가 변경될 수 있다.</p>\n<p>For example, we want to display a YouTube video using the code below. If you give a different <code>id</code> value to render a new\nvideo, since the previously rendered iframe element is still alive and only the src is changed, the browser history can\nbe modified.</p>\n<pre><code class="language-typescript"><span class="hljs"><span class="hljs-keyword">const</span> Video = <span class="hljs-function">(<span class="hljs-params">{id = <span class="hljs-string">&#x27;&#x27;</span>}</span>) =&gt;</span> (\n    &lt;iframe\n        frameBorder={<span class="hljs-number">0</span>}\n        allowFullScreen={<span class="hljs-literal">true</span>}\n        src={<span class="hljs-string">`https://www.youtube.com/embed/<span class="hljs-subst">${id}</span>`</span>}\n    /&gt;\n);</span></code></pre>\n<p>아래와 같이 key를 사용하여 리액트가 iframe을 새로 렌더링하도록 강제하면 히스토리에 영향을 미치지 않고 비디오를 변경할 수 있다.</p>\n<p>If you force React to render a new iframe using the key as shown below, You can change the video without affecting the\nhistory.</p>\n<pre><code class="language-typescript"><span class="hljs"><span class="hljs-keyword">const</span> Video = <span class="hljs-function">(<span class="hljs-params">{id = <span class="hljs-string">&#x27;&#x27;</span>}</span>) =&gt;</span> (\n    &lt;iframe\n        key = {id} <span class="hljs-comment">// Or a counter, a random value, ...</span>\n        frameBorder={<span class="hljs-number">0</span>}\n        allowFullScreen={<span class="hljs-literal">true</span>}\n        src={<span class="hljs-string">`https://www.youtube.com/embed/<span class="hljs-subst">${id}</span>`</span>}\n    /&gt;\n);</span></code></pre>\n'}}}]);