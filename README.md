# HoSanEl

This is a basic patient, traveler and spread tracking system currently in development for use in Somalia as a developer's contribution to the efforts against the imminent COVID-19 outbreak in Somalia.
It's dedicated to and named in memory of Abdi Mohamed Hassan, Elman Ali Ahmed and Hodan Naleye. You can learn more about each of these Somali heroes at the links below.

https://en.wikipedia.org/wiki/Hodan_Nalayeh
https://www.hiiraan.com/comments2-news-2008-jun-former_somali_air_force_pilot_who_refused_to_bomb_civilians_in_hargiesa.aspx
https://en.wikipedia.org/wiki/Elman_Ali_Ahmed

## Infrastructure

This is AWS SAM app. SAM is a serverless specification built on top of AWS Cloudformation. It is powered by AWS Lambda, DynamoDB, S3 and DynamoDB. 

AWS SAM also allows local execution of an application. For example, you can locally invoke an API endpoint that triggers a lambda function, which uses a DynamoDB Table and etc.


## API Docs

The API has one endpoint method: POST. The expected method paramter format/schema can be found in the docs folder. There are two operations possible as of now. More will be added. To get the API web address, please contact me.

## Running code locally

You can clone this repo and run it locally to test the API endpoints for any changes you make. To pass you're parameters to the local lambda function, you'll have to place you're parameters in app.js at line number 21. Set the body equal to your desired parameters instead JSON.parse(...)

To build:

```bash
sam build
```

To test locally:

```bash
sam local invoke
```

Both at once: 


```bash
sam build && sam local invoke
```

## Contribution

Any contribution is welcome. The most important remaining implementations are:
    SNS with text integration
    Completing some of the remaining functions of the base service, such as database operations

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.



## Installing AWS SAM

    https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html


## Issue List

Discrepencies
    The data/db schema and what's fully functional on the API endpoints don't match up fully. This is because some of the data points from the schema are not mapped in the person mapper. This is important because if fields missing from the API aren't mapped, they will not be persisted in the DB.
    Consulting the previous versions of the API docs and comparing them with the current will help in finding some of the missing fields.

## License
[MIT](https://choosealicense.com/licenses/mit/)
