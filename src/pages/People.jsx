import PageContainer from '../components/PageContainer'
import Section from '../components/Section'

const experience = [
  { role: 'Leirskolelærer', note: 'Outdoor education at school camps' },
  { role: 'Friluftspedagog', note: 'Outdoor activity pedagogue' },
  { role: 'Vaktleder', note: 'Shift supervisor, Aquarama' },
  { role: 'Hovedtillitsvalgt', note: 'Main union representative' },
]

const education = [
  { title: 'Bachelor i folkehelse', institution: '' },
  { title: 'Friluftsliv og uterehabilitering', institution: '' },
  { title: 'Ledelse og selvledelse', institution: 'Kristiania' },
]

const skills = [
  'Communication',
  'Leadership',
  'Safety & First Aid',
  'Public Health',
  'Group facilitation',
]

const photos = [
  { src: '/surfing.jpg', alt: 'Surfing' },
  { src: '/coachingwindsurfing.jpg', alt: 'Coaching windsurfing' },
  { src: '/vintertur.jpg', alt: 'Vintertur' },
]

export default function People() {
  return (
    <PageContainer>
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">
          People / Education
        </h1>
        <p className="text-base text-gray-600 max-w-xl leading-relaxed">
          Background in outdoor education, public health and working with
          people. I have experience leading groups, facilitating learning, and
          holding organisational responsibility.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-12">
        {photos.map((photo) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="w-full aspect-square object-cover rounded-lg"
          />
        ))}
      </div>

      <Section title="Experience">
        <div className="space-y-3">
          {experience.map((item) => (
            <div key={item.role} className="flex items-baseline gap-3">
              <span className="text-sm font-medium text-gray-900 min-w-44">
                {item.role}
              </span>
              <span className="text-sm text-gray-500">{item.note}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-3">
          {education.map((item) => (
            <div key={item.title} className="flex items-baseline gap-3">
              <span className="text-sm font-medium text-gray-900 min-w-44">
                {item.title}
              </span>
              {item.institution && (
                <span className="text-sm text-gray-500">{item.institution}</span>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm px-3 py-1 border border-gray-200 rounded text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>
    </PageContainer>
  )
}
