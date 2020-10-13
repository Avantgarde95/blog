(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{27:function(s,e){s.exports={title:"",html:'<p><a target="_blank" rel="noopener noreferrer"  href="https://marked.js.org/">marked.js</a> 라이브러리를 사용하면 마크다운 문서를 HTML로 변환할 수 있다.\n이 블로그도 마크다운으로 포스트를 작성하고 해당 라이브러리로 포스트를 HTML로 변환해서 렌더링하는 방식으로 작동한다.</p>\n<p>We can convert a Markdown document to HTML by using <a target="_blank" rel="noopener noreferrer"  href="https://marked.js.org/">marked.js</a> library.\nThis blog also works by writing a post in Markdown, converting the post to HTML with the library, and rendering it.</p>\n<pre><code class="language-html"><span class="hljs"># Hello, world! =&gt; <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello, world!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></span></code></pre>\n<p>이 때 HTML 변환 과정을 수정하고 싶으면 어떻게 하면 될까?\nmarked.js의 <code>Renderer</code> 클래스를 이용하여 커스텀 렌더러를 작성해주면 된다.</p>\n<p>What should we do if we want to modify HTML converting process?\nWe can do it by writing a custom renderer by using <code>Renderer</code> class of marked.js.</p>\n<pre><code class="language-javascript"><span class="hljs"><span class="hljs-keyword">const</span> {Renderer} = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;marked&#x27;</span>);\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyRenderer</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Renderer</span> </span>{\n    ...\n}</span></code></pre>\n<p><a target="_blank" rel="noopener noreferrer"  href="https://github.com/markedjs/marked/blob/master/src/Renderer.js">여기서</a> <code>Renderer</code>가 마크다운의 구성요소들을 어떻게 변환하는지 볼 수 있다.\n원하는 구성요소에 해당하는 메서드를 오버라이드하면 된다.\n예를 들어, 아래의 커스텀 렌더러는 이미지를 변환할 때 HTML 태그에 <code>Image</code>라는 클래스를 붙일 것이다.</p>\n<p>We can see how marked.js handles the components of Markdown at <a target="_blank" rel="noopener noreferrer"  href="https://github.com/markedjs/marked/blob/master/src/Renderer.js">here</a>.\nOverride the method which corresponds to the component you want.\nFor example, the custom renderer below will add <code>Image</code> class to the HTML tag when converting a image.</p>\n<pre><code class="language-javascript"><span class="hljs"><span class="hljs-keyword">const</span> {Renderer} = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;marked&#x27;</span>);\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyRenderer</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Renderer</span> </span>{\n    image(href, title, text) {\n        <span class="hljs-keyword">const</span> out = <span class="hljs-built_in">super</span>.image(href, title, text);\n        <span class="hljs-keyword">return</span> <span class="hljs-string">`&lt;img class=&quot;Image&quot;<span class="hljs-subst">${out.substr(<span class="hljs-number">4</span>)}</span>`</span>;\n    }\n}</span></code></pre>\n<p>만약 <a target="_blank" rel="noopener noreferrer"  href="https://webpack.js.org/">웹팩</a>을 사용한다면, 아래와 같이 커스텀 렌더러를 적용해줄 수 있다.</p>\n<p>If you use <a target="_blank" rel="noopener noreferrer"  href="https://webpack.js.org/">Webpack</a>, you can apply the custom renderer like the following.</p>\n<pre><code class="language-javascript"><span class="hljs"><span class="hljs-built_in">module</span>: {\n    <span class="hljs-attr">rules</span>: [\n        {\n            <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\\.md$/</span>,\n            use: [\n                {<span class="hljs-attr">loader</span>: <span class="hljs-string">&#x27;html-loader&#x27;</span>},\n                {<span class="hljs-attr">loader</span>: <span class="hljs-string">&#x27;markdown-loader&#x27;</span>, <span class="hljs-attr">options</span>: {<span class="hljs-attr">renderer</span>: MyRenderer}}\n            ]\n        }\n    ]\n}</span></code></pre>\n'}}}]);