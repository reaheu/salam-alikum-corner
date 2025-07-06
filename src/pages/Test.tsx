
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { questions } from "@/data/questions";

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const navigate = useNavigate();

  const handleAnswerChange = (optionId: string, checked: boolean) => {
    const currentAnswers = answers[currentQuestion] || [];
    
    if (checked) {
      // Maximum 2 selections per question
      if (currentAnswers.length < 2) {
        setAnswers({
          ...answers,
          [currentQuestion]: [...currentAnswers, optionId]
        });
      }
    } else {
      setAnswers({
        ...answers,
        [currentQuestion]: currentAnswers.filter(id => id !== optionId)
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results and navigate
      const results = calculateResults();
      navigate("/result", { state: { results } });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const functionScores = {
      Ne: 0, Ni: 0, Se: 0, Si: 0,
      Te: 0, Ti: 0, Fe: 0, Fi: 0
    };

    Object.entries(answers).forEach(([questionIndex, selectedOptions]) => {
      const question = questions[parseInt(questionIndex)];
      selectedOptions.forEach(optionId => {
        const option = question.options.find(opt => opt.id === optionId);
        if (option) {
          option.functions.forEach(func => {
            functionScores[func.name as keyof typeof functionScores] += func.weight;
          });
        }
      });
    });

    // Determine MBTI type based on strongest functions
    const getStrongestFunction = (group: string[]) => {
      return group.reduce((strongest, current) => 
        functionScores[current as keyof typeof functionScores] > 
        functionScores[strongest as keyof typeof functionScores] ? current : strongest
      );
    };

    const dominantPerception = getStrongestFunction(['Ne', 'Ni', 'Se', 'Si']);
    const dominantJudging = getStrongestFunction(['Te', 'Ti', 'Fe', 'Fi']);

    // Determine MBTI type
    const isExtraverted = ['Ne', 'Se', 'Te', 'Fe'].includes(dominantPerception) || 
                         ['Ne', 'Se', 'Te', 'Fe'].includes(dominantJudging);
    
    const isIntuitive = ['Ne', 'Ni'].includes(dominantPerception);
    const isThinking = ['Te', 'Ti'].includes(dominantJudging);
    const isJudging = ['Te', 'Fe'].includes(dominantJudging) || ['Ti', 'Fi'].includes(dominantJudging);

    const mbtiType = 
      (isExtraverted ? 'E' : 'I') +
      (isIntuitive ? 'N' : 'S') +
      (isThinking ? 'T' : 'F') +
      (isJudging ? 'J' : 'P');

    return {
      mbtiType,
      functionScores,
      dominantFunction: Object.entries(functionScores).reduce((a, b) => 
        functionScores[a[0] as keyof typeof functionScores] > functionScores[b[0] as keyof typeof functionScores] ? a : b
      )[0]
    };
  };

  const currentAnswers = answers[currentQuestion] || [];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              السؤال {currentQuestion + 1} من {questions.length}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">
              {questions[currentQuestion].question}
            </CardTitle>
            <p className="text-sm text-gray-600">
              يمكنك اختيار إجابة واحدة أو إجابتين كحد أقصى
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option) => (
                <div key={option.id} className="flex items-start space-x-3 space-x-reverse">
                  <Checkbox
                    id={option.id}
                    checked={currentAnswers.includes(option.id)}
                    onCheckedChange={(checked) => handleAnswerChange(option.id, checked as boolean)}
                    disabled={!currentAnswers.includes(option.id) && currentAnswers.length >= 2}
                  />
                  <label
                    htmlFor={option.id}
                    className="text-gray-700 cursor-pointer flex-1 leading-relaxed"
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            السابق
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={currentAnswers.length === 0}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
          >
            {currentQuestion === questions.length - 1 ? 'إنهاء الاختبار' : 'التالي'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Test;
