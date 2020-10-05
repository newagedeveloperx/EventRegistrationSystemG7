from rest_framework import serializers
from .models import Account
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
import re


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        style={'input_type':'password'}
    )
    Confirm_password = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = Account
        fields = ['Firstname', 'Lastname', 'email', 'password',
                  'Confirm_password', 'Username',  'Phone', 'City']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, attrs):
        email = attrs.get('email', '')
        Username = attrs.get('Username', '')
        password = attrs.get('password', '')
        Confirm_password = attrs.get('Confirm_password', '')
        Phone = attrs.get('Phone', '')

        # Password validation
        if not re.findall('\d', password):
            raise serializers.ValidationError(
               "A complex password is required, it should contain at least a number")

        # Password match validation
        if password != Confirm_password:
            raise serializers.ValidationError(
                {'password': 'The passwords do not match, kindly check and enter again'})

        # Password length validation
        if len(password) < 6:
            raise serializers.ValidationError(
                "Password must be at least 6 characters")
        return attrs

        # Username validation
        if not Username.isalnum():
            raise serializers.ValidationError(
                'The username must be a combination of characters')

        # Phone number validation
        if re.findall('[a-zA-Z\?!@#$%&()`~}{*+_^><.,|\-]', Phone):
            raise serializers.ValidationError(
                'Phone numbers are made up of numbers only')


    def create(self, validated_data):
        return Account.objects.create_user(**validated_data)


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(
        max_length=68, min_length=6, write_only=True)
    Username = serializers.CharField(
        max_length=255, min_length=3, read_only=True)
    tokens = serializers.CharField(max_length=68, min_length=6, read_only=True)

    class Meta:
        model = Account
        fields = ['email', 'password', 'Username', 'tokens']

    def validate(self, attrs):
        email = attrs.get('email', '')
        password = attrs.get('password', '')

        user = auth.authenticate(email=email, password=password)
        if not user:
            raise AuthenticationFailed('Login credentials invalid')
        if not user.is_active:
            raise AuthenticationFailed('This account is not active')

        return {
            'email': user.email,
            'Username': user.Username,
            'tokens': user.tokens()

   
        }

        return super().validate(attrs)
