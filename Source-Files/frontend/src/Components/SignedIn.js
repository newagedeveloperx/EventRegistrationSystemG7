{% block title %}Welcome {% endblock %}

{% block content %}
<h1>Welcome {{new_user.first_name}}!</h1>
<p>Your account has been successfully created. Now you can <a href="{% url 'login' %}">log in</a></p>
{% endblock %}