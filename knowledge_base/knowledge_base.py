import json
import re


class SubType:
    name: str
    initial: str

    def __init__(self, name):
        self.name = name
        self.initial = 'N' if name == 'Intuitive' else name[0].upper()

    def __str__(self):
        return f"{self.initial}: {self.name}"


class Type:
    positive: SubType
    negative: SubType

    def __init__(self, positive: SubType, negative: SubType):
        self.positive = positive
        self.negative = negative

    def __str__(self):
        return f"{self.negative.initial}: {self.negative.name} ; {self.positive.initial}: {self.positive.name}"


class Meta:
    description: str
    types: [Type]

    def __init__(self, description: str, types: [Type]):
        self.description = description
        self.types = types


class Answer:
    text: str
    point: int

    def __init__(self, text: str, point: int):
        self.text = text
        self.point = point


class Question:
    id: int
    text: str
    direction: SubType
    keyed: str

    def __init__(self, id: int, text: str, direction: SubType, keyed: str):
        self.id = id
        self.text = text
        self.direction = direction
        self.keyed = keyed

    def __str__(self):
        return f"Q: {self.text} -> A: {self.direction}"


class JSON:
    meta: Meta
    answers: [Answer]
    qustions: [Question]

    def __init__(self, meta: Meta, answers: [Answer], question: [Question]):
        self.meta = meta
        self.answers = answers
        self.question = question


def compute_dir(text: str) -> SubType:
    for t in types_list:
        if t.negative.name.lower() == text.lower() or t.positive.name.lower() == text.lower():
            return t.positive


def compute_key(text: str) -> str:
    for t in types_list:
        if t.negative.name.lower() == text.lower():
            return '-'
        elif t.positive.name.lower() == text.lower():
            return '+'


if __name__ == '__main__':
    IntrovertedType = SubType('Introverted')
    ExtrovertedType = SubType('Extraverted')
    SensingType = SubType('Sensing')
    IntuitiveType = SubType('Intuitive')
    ThinkingType = SubType('Thinking')
    FeelingType = SubType('Feeling')
    JudgingType = SubType('Judging')
    PerceivingType = SubType('Perceiving')

    subtypes_list = [IntrovertedType, ExtrovertedType, SensingType, IntuitiveType, ThinkingType, FeelingType,
                     JudgingType, PerceivingType]

    IE = Type(ExtrovertedType, IntrovertedType)
    SI = Type(IntuitiveType, SensingType)
    TF = Type(ThinkingType, FeelingType)
    JP = Type(PerceivingType, JudgingType)

    types_list: [Type] = [IE, SI, TF, JP]

    TXT_FILE = 'questions.txt'

    description_meta = "The Myers-Briggs Type Indicator (MBTI) is a popular personality assessment tool that is designed to help individuals understand their unique psychological preferences in how they perceive the world and make decisions. The MBTI is based on Carl Jung's theory of psychological types, which suggests that individuals have innate preferences for how they process information, make decisions, and interact with others. The MBTI assesses four dimensions of personality: Extraversion vs. Introversion, Sensing vs. Intuition, Thinking vs. Feeling, and Judging vs. Perceiving, resulting in 16 possible personality types. The MBTI is often used in personal and professional development, team building, and career counseling."
    meta_obj = Meta(description_meta, types_list)

    answers_list: [Answer] = [
        Answer('Completely disagree', -3),
        Answer('Strongly disagree', -2),
        Answer('Disagree', -1),
        Answer('Neutral', 0),
        Answer('Agree', 1),
        Answer('Strongly agree', 2),
        Answer('Completely disagree', 3),
    ]

    questions_list: [Question] = []
    with open(TXT_FILE) as file:
        for index, line in enumerate(file):
            statement, characteristic, _ = re.split(r'[()]', line.rstrip())
            q = Question(index, statement.strip(), compute_dir(characteristic), compute_key(characteristic))
            questions_list.append(q)
    questions_list = [q for q in questions_list if q.direction is not None]

    JSON = JSON(meta_obj, answers_list, questions_list)
    json_str = json.dumps(JSON, default=lambda o: o.__dict__, indent=2)
    with open('knowledge_base.json', 'w') as file:
        file.write(json_str)
