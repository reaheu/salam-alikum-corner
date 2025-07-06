
import { useLocation, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Brain, Home, RotateCcw } from "lucide-react";

interface ResultData {
  mbtiType: string;
  functionScores: Record<string, number>;
  dominantFunction: string;
}

const Result = () => {
  const location = useLocation();
  const results = location.state?.results as ResultData;

  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-600 mb-4">لم يتم العثور على نتائج الاختبار</p>
            <Link to="/">
              <Button>العودة للرئيسية</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const functionDescriptions = {
    Ne: { name: "الحدس الخارجي", description: "استكشاف الإمكانيات والأفكار الجديدة" },
    Ni: { name: "الحدس الداخلي", description: "فهم الأنماط والرؤى العميقة" },
    Se: { name: "الإحساس الخارجي", description: "الوعي باللحظة الحالية والتفاصيل" },
    Si: { name: "الإحساس الداخلي", description: "الاعتماد على التجارب والذكريات" },
    Te: { name: "التفكير الخارجي", description: "التنظيم وتحقيق الأهداف بكفاءة" },
    Ti: { name: "التفكير الداخلي", description: "التحليل المنطقي والفهم العميق" },
    Fe: { name: "المشاعر الخارجية", description: "الاهتمام بمشاعر واحتياجات الآخرين" },
    Fi: { name: "المشاعر الداخلية", description: "الصدق مع القيم الشخصية" }
  };

  const mbtiDescriptions = {
    INTJ: "المهندس - استراتيجي ومستقل",
    INTP: "المفكر - منطقي ومبدع",
    ENTJ: "القائد - حازم وطموح",
    ENTP: "المبتكر - مبدع ومتحمس",
    INFJ: "المحامي - مثالي ومنظم",
    INFP: "الوسيط - مبدع ومتعاطف",
    ENFJ: "المعلم - ملهم ومتعاطف",
    ENFP: "المحفز - متحمس ومبدع",
    ISTJ: "المنطقي - عملي وموثوق",
    ISFJ: "المحامي - متعاطف ومسؤول",
    ESTJ: "المدير - منظم وحازم",
    ESFJ: "القنصل - متعاطف واجتماعي",
    ISTP: "المصلح - عملي ومرن",
    ISFP: "المغامر - حساس ومرن",
    ESTP: "المقامر - عملي وحيوي",
    ESFP: "المؤدي - متحمس واجتماعي"
  };

  const totalScore = Object.values(results.functionScores).reduce((sum, score) => sum + score, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Brain className="w-10 h-10 text-purple-600" />
            نتائج اختبار الوظائف الإدراكية
          </h1>
        </div>

        {/* MBTI Type Result */}
        <Card className="mb-8 border-2 border-purple-200">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-purple-800">
              نمط شخصيتك: {results.mbtiType}
            </CardTitle>
            <p className="text-lg text-gray-700">
              {mbtiDescriptions[results.mbtiType as keyof typeof mbtiDescriptions]}
            </p>
          </CardHeader>
        </Card>

        {/* Dominant Function */}
        <Card className="mb-8 border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-xl text-green-800">
              الوظيفة الإدراكية المهيمنة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                {functionDescriptions[results.dominantFunction as keyof typeof functionDescriptions]?.name}
              </h3>
              <p className="text-gray-700">
                {functionDescriptions[results.dominantFunction as keyof typeof functionDescriptions]?.description}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Function Scores */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">
              نسب الوظائف الإدراكية
            </CardTitle>
            <p className="text-gray-600">
              توزيع قوة الوظائف الإدراكية لديك بناءً على إجاباتك
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(results.functionScores)
                .sort(([,a], [,b]) => b - a)
                .map(([func, score]) => {
                  const percentage = totalScore > 0 ? (score / totalScore) * 100 : 0;
                  return (
                    <div key={func} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">
                          {functionDescriptions[func as keyof typeof functionDescriptions]?.name}
                        </span>
                        <span className="text-sm text-gray-600">
                          {percentage.toFixed(1)}%
                        </span>
                      </div>
                      <Progress value={percentage} className="h-3" />
                      <p className="text-xs text-gray-600">
                        {functionDescriptions[func as keyof typeof functionDescriptions]?.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mb-8 border-2 border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-lg text-amber-800 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              تنبيه مهم حول دقة النتائج
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              <strong>هذا الاختبار أداة استكشافية:</strong> النتائج ليست نهائية أو دقيقة بنسبة 100%. 
              اعتبرها نقطة انطلاق لفهم شخصيتك بشكل أفضل.
            </p>
            <p>
              <strong>التطوير المستمر:</strong> شخصيتك قد تتطور وتتغير مع الوقت والتجارب الجديدة.
            </p>
            <p>
              <strong>الاستشارة المهنية:</strong> للحصول على تقييم دقيق، ننصح بالتشاور مع متخصص في علم النفس.
            </p>
          </CardContent>
        </Card>

        {/* Sources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg text-gray-800">
              مصادر الأسئلة والمعلومات
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-700">
            <p>• نظرية كارل يونغ للوظائف الإدراكية</p>
            <p>• مؤشر مايرز-بريغز للأنماط (MBTI)</p>
            <p>• أبحاث علم النفس المعرفي الحديث</p>
            <p>• دراسات الشخصية في علم النفس الإكلينيكي</p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              العودة للرئيسية
            </Button>
          </Link>
          <Link to="/test">
            <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
              <RotateCcw className="w-4 h-4" />
              إعادة الاختبار
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
