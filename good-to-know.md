{# 	
Get info from the md file (index) then adds it when building
    </div>
		<p class="">{{ intro.summary }}</p>
		<a href="{{ intro.buttonUrl }}" class="button">{{ intro.buttonText }}</a>
	</div>
	<div class="">
		<img class="" src="{{ intro.image }}" alt="{{ intro.imageAlt }}" />
	</div>


Gets information, and then sets it in the ctaContent.
When including it uses the ctaContent for its layout.
Can use a md file for info, or a Json file.
{% set ctaContent = primaryCTA %}
{% include "partials/cta.html" %}


<ul>
	<li> this no work</li>

	{%- for post in collections.post -%}
	<li>
		<div>
			<a href="{{post.url}}">{{ post.data.title }}</a>
			<p>{{post.date.toLocaleString()}}</p>
		</div>
	</li>
	{%- endfor -%}
</ul>


{%- for post in collections.post -%}

{% set blogItemContent = post.data.blogItem %}
{% include "partials/blogItem.html" %}

{%- endfor -%}


<a href="https://www.flaticon.com/free-icons/cv" title="CV icons">CV icons created by spaceman.design - Flaticon</a>
This is the person on paper 

<a href="https://www.flaticon.com/free-icons/curriculum" title="curriculum icons">Curriculum icons created by Freepik - Flaticon</a>
This is the CV on paper 

<a href="https://www.flaticon.com/free-icons/right-chevron" title="right chevron icons">Right chevron icons created by th studio - Flaticon</a>
Arrow

Todo:
- Start on project page 
- Fixing Links 
    * Project
- CV
- Fixing Links 
    * CV download  
	
	
                <div class="">
                    <button class="project-button" onclick="ToggleContent('CHANGE')">
                        <h4>
                        CHANGE
                        </h4>
                        <img src="/images/main/chevron-vit-rotate.png" alt="">
                    </button>
                    <div id="CHANGE">
                        {% highlight "" %}

						{% endhighlight %}
                    </div>
                </div>
	

Project Templet
    "mainPage": ,
    "title": "",
    "startDate": "20XX/XX",
    "endDate": "20XX/X",
    "gameTags": "",
    "gameInfo": "",
    "storeTags": "",
    "role": "",
    "peopleAmount": ,
    "timeWorked": "",
    "engine": "",
    "otherTools": "",
    "summaryOne": "",
    "summaryTwo": "",
    "url": "/projects//",
    "projectUrl": "",
    "imageFileRoute": "project_img/",
    "imageUrl": "/",
    "topProjectUrl": "/",
    "topProjectUrlOrigin": "",
    "summary" : ""
#}