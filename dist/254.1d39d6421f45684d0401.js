(self.webpackChunk=self.webpackChunk||[]).push([[254],{254:function(s){s.exports={html:'<p>타입스크립트에서 string의 union type을 enum과 유사한 용도로 쓸 수 있다.</p>\n<p>In TypeScript, we can use the union type of string for a similar purpose to enum.</p>\n<pre><code class="language-typescript"><span class="hljs"><span class="hljs-keyword">type</span> Category = <span class="hljs-string">&#x27;Computer&#x27;</span> | <span class="hljs-string">&#x27;Music&#x27;</span> | <span class="hljs-string">&#x27;Misc&#x27;</span>;\n\n<span class="hljs-keyword">const</span> currentCategory: Category = <span class="hljs-string">&#x27;Computer&#x27;</span>;</span>\n</code></pre>\n<p><strong>Const assertion</strong>을 활용하면, string의 배열을 만들고 그 배열에서 union type을 추출하는 방식으로 union type과 type의 배열을 동시에 얻을 수가 있다.</p>\n<p>Using the <strong>const assertion</strong>, we can obtain a union type and an array of types at the same time by creating an array of strings and extracting the union type from the array.</p>\n<pre><code class="language-typescript"><span class="hljs"><span class="hljs-keyword">const</span> allCategories = [<span class="hljs-string">&#x27;Computer&#x27;</span>, <span class="hljs-string">&#x27;Music&#x27;</span>, <span class="hljs-string">&#x27;Misc&#x27;</span>] <span class="hljs-keyword">as</span> <span class="hljs-keyword">const</span>; <span class="hljs-comment">// Const assertion.</span>\n<span class="hljs-keyword">type</span> Category = (<span class="hljs-keyword">typeof</span> allCategories)[<span class="hljs-built_in">number</span>]; <span class="hljs-comment">// &#x27;Computer&#x27; | &#x27;Music&#x27; | &#x27;Misc&#x27;.</span>\n\n<span class="hljs-keyword">const</span> currentCategory: Category = <span class="hljs-string">&#x27;Computer&#x27;</span>;\n\nallCategories.forEach(<span class="hljs-function"><span class="hljs-params">category</span> =&gt;</span> {\n    <span class="hljs-built_in">console</span>.log(category);\n});</span>\n</code></pre>\n<p>이 블로그에서도 카테고리, 테마 등의 타입들을 구현할 때 이 방법을 사용하였다.</p>\n<p>This blog also used this method when implementing types such as categories and themes.</p>\n'}}}]);