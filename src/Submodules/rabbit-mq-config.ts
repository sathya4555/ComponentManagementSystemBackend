module.exports = {
  Topics: [
    {
      TopicName: "STUDENT_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "STUDENTCOURSE_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["STUDENTS_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "STUDENT_ADD-STUDENTCOURSE_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
    },

    {
      TopicName: "EMPLOYEE_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "STUDENTCOURSE_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["STUDENTS_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "EMPLOYEE_UPDATE-STUDENTCOURSE_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
    },

    {
      TopicName: "EMPLOYEE_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "STUDENTCOURSE_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["STUDENTS_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "EMPLOYEE_DELETE-STUDENTCOURSE_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
    },
  ]
};
