from rest_framework import serializers
from . import models


class   TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Todo # the models misspelling gave an  meta attribute error
        fields = '__all__'

#mispelling and casing causes causes the classs meta error        