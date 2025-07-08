import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import ExperienciaItem from "../components/ExperienciaItem";
import FormacaoItem from "../components/FormacaoItem";

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topRow}>
          {/* Imagem */}
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.profileImageWrapper}>
              {image ? (
                <Image source={{ uri: image }} style={styles.profileImage} />
              ) : (
                <Text style={styles.placeholderText}>
                  Toque para{'\n'}adicionar foto
                </Text>
              )}
            </View>
          </TouchableOpacity>
          {/* Informações */}
          <View style={styles.infoBlock}>
            <Text style={styles.name}>Soluço Banguela</Text>
            <Text style={styles.title}>Domador de Dragões</Text>

            <View style={styles.contactSection}>
              <Text style={styles.contactTitle}>Contato</Text>
              <Text style={styles.contactText}>Email: domador.dragoes@feras.com</Text>
              <Text style={styles.contactText}>Telefone: Sinal de fumaça</Text>
              <Text style={styles.contactText}>Website: domadordedragoes.com</Text>
            </View>
          </View>
          {/* Seção: Sobre mim */}
          <View style={styles.aboutSection}>
            <Text style={styles.sectionTitle}>Sobre mim</Text>
            <Text style={styles.aboutText}>               Treino seu dragão para conseguir montar nele e voar com ele, faço ele te obedecer completamente.
              
            </Text>
          </View>

          {/* Seção: Certificados */}
          <View style={styles.certificatesSection}>
            <Text style={styles.sectionTitle}>Certificados</Text>

            {/* Cabeçalho da Tabela */}
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.tableCell, styles.cellCurso]}>Curso</Text>
              <Text style={[styles.tableCell, styles.cellInstituicao]}>Instituição</Text>
              <Text style={[styles.tableCell, styles.cellAno]}>Ano</Text>
            </View>

            {/* Linhas da Tabela */}
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.cellCurso]}>Domador de Dragões</Text>
              <Text style={[styles.tableCell, styles.cellInstituicao]}>Universidade Draconis</Text>
              <Text style={[styles.tableCell, styles.cellAno]}>2023</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.cellCurso]}>Treinador de Dragões</Text>
              <Text style={[styles.tableCell, styles.cellInstituicao]}>Academia de Estudos Draconianos</Text>
              <Text style={[styles.tableCell, styles.cellAno]}>2022</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.cellCurso]}>Veterinaria de Dragões</Text>
              <Text style={[styles.tableCell, styles.cellInstituicao]}>Instituto Escamas de Ouro</Text>
              <Text style={[styles.tableCell, styles.cellAno]}>2021</Text>
            </View>
          </View>

          {/* Seção: Habilidades */}
          <View style={styles.skillsSection}>
            <Text style={styles.sectionTitle}>Habilidades</Text>

            {/* Exemplo de Habilidade */}
            <View style={styles.skillItem}>
              <Text style={styles.skillLabel}>Domador de Dragões</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '100%' }]} />
              </View>
            </View>

            <View style={styles.skillItem}>
              <Text style={styles.skillLabel}>Treinador de Dragões</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '100%' }]} />
              </View>
            </View>

            <View style={styles.skillItem}>
              <Text style={styles.skillLabel}>Veterinaria de Dragões</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '80%' }]} />
              </View>
            </View>

            <View style={styles.skillItem}>
              <Text style={styles.skillLabel}>Nutricionista de Dragões</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '55%' }]} />
              </View>
            </View>
          </View>
          {/* Seção: Idiomas */}
          <View style={styles.languagesSection}>
            <Text style={styles.sectionTitle}>Idiomas</Text>

            <View style={styles.languageItem}>
              <Text style={styles.languageLabel}>🇺🇸 Inglês</Text>
              <View style={styles.dotsRow}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <View
                    key={i}
                    style={[styles.dot, i <= 4 ? styles.dotFilled : styles.dotEmpty]}
                  />
                ))}
              </View>
            </View>

            <View style={styles.languageItem}>
              <Text style={styles.languageLabel}>🇪🇸 Espanhol</Text>
              <View style={styles.dotsRow}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <View
                    key={i}
                    style={[styles.dot, i <= 3 ? styles.dotFilled : styles.dotEmpty]}
                  />
                ))}
              </View>
            </View>

            <View style={styles.languageItem}>
              <Text style={styles.languageLabel}>🇧🇷 Português</Text>
              <View style={styles.dotsRow}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <View
                    key={i}
                    style={[styles.dot, styles.dotFilled]}
                  />
                ))}
              </View>
            </View>
          </View>
          {/* Seção: Idiomas com gráfico circular */}
          <View style={styles.languagesSection}>
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionTitle}>Idiomas
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.infoButton}>
                  <Text style={styles.infoButtonText}>🇺🇸</Text>
                </TouchableOpacity>
              </Text>
            </View>
            {/* Circles aqui */}

            <View style={styles.languagesRow}>
              <View style={styles.languageCircle}>
                <CircularProgress
                  value={90}
                  radius={40}
                  duration={1000}
                  progressValueColor={'#000'}
                  activeStrokeColor={'#007AFF'}
                  inActiveStrokeColor={'#eee'}
                  inActiveStrokeOpacity={0.4}
                  title={'Inglês'}
                  titleColor={'#333'}
                  titleStyle={{ fontSize: 12 }}
                />
              </View>

              <View style={styles.languageCircle}>
                <CircularProgress
                  value={70}
                  radius={40}
                  duration={1000}
                  progressValueColor={'#000'}
                  activeStrokeColor={'#007AFF'}
                  inActiveStrokeColor={'#eee'}
                  inActiveStrokeOpacity={0.4}
                  title={'Espanhol'}
                  titleColor={'#333'}
                  titleStyle={{ fontSize: 12 }}
                />
              </View>

              <View style={styles.languageCircle}>
                <CircularProgress
                  value={100}
                  radius={40}
                  duration={1000}
                  progressValueColor={'#000'}
                  activeStrokeColor={'#007AFF'}
                  inActiveStrokeColor={'#eee'}
                  inActiveStrokeOpacity={0.4}
                  title={'Português'}
                  titleColor={'#333'}
                  titleStyle={{ fontSize: 12 }}
                />
              </View>
            </View>
          </View>
          {/* Linha divisória */}
          <View style={styles.divisor} />
          {/* Seção: Experiência Profissional */}
          <View style={styles.experienciaSection}>
            <Text style={styles.sectionTitle}>Experiência Profissional</Text>
            <ExperienciaItem
              cargo="Domador e Treinador de Dragões"
              empresa="Ilha de Berk LTDA"
              periodo="2019 - Presente"
              descricao="Responsável por domar todos os dragões para os cidadões da ilha e encontrar o ninho dos dragões e derrotar o lider deles."
            />
            <ExperienciaItem
              cargo="domador, Treinador e Veterinario de Dragões"
              empresa="Ninho dos Dragões - Montanha de Neve"
              periodo="2023 - 2025"
              descricao="Fui o responsável por salvar todos os dragões ao lado da minha mãe e seu dragão, derrotei outro lider dos dragões."
            />
          </View>
          {/* Linha divisória */}
          <View style={styles.divisor} />
          {/* Seção: Formação Acadêmica */}
          <View style={styles.formacaoSection}>
            <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
            <FormacaoItem
              curso="Domador de Dragões"
              instituicao="Universidade Draconis"
              ano="2019 - 2023"
            />
            <FormacaoItem
              curso="Treinador de Dragões"
              instituicao="Academia de Estudos Draconianos"
              ano="2017 - 2019"
            />
          </View>
          {/* Linha divisória */}
          <View style={styles.divisor} />
        </View>
        {modalVisible && (
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Níveis de Idioma</Text>

              {/* Seção: Idiomas */}
              <View style={styles.languagesSection}>
                <View style={styles.languageItem}>
                  <Text style={styles.languageLabel}>
                    🇺🇸 Inglês:{" "}
                    <View style={styles.dotsRow}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <View
                          key={i}
                          style={[
                            styles.dot,
                            i <= 4 ? styles.dotFilled : styles.dotEmpty,
                          ]}
                        />
                      ))}
                    </View>
                  </Text>
                  <Text style={styles.modalText}>
                    Cconsegue se comunicar fluentemente em ambientes profissionais
                    e técnicos.
                  </Text>
                </View>

                <View style={styles.languageItem}>
                  <Text style={styles.languageLabel}>
                    🇪🇸 Espanhol:{" "}
                    <View style={styles.dotsRow}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <View
                          key={i}
                          style={[
                            styles.dot,
                            i <= 3 ? styles.dotFilled : styles.dotEmpty,
                          ]}
                        />
                      ))}
                    </View>
                  </Text>

                  <Text style={styles.modalText}>
                    Intermediário: compreende e se expressa em situações do dia a
                    dia.
                  </Text>
                </View>

                <View style={styles.languageItem}>
                  <Text style={styles.languageLabel}>
                    🇧🇷 Português:{" "}
                    <View style={styles.dotsRow}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <View key={i} style={[styles.dot, styles.dotFilled]} />
                      ))}
                    </View>
                  </Text>

                  <Text style={styles.modalText}>
                    Nativo: completo domínio da língua materna.
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.modalCloseButton}
              >
                <Text style={styles.modalCloseText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topRow: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  profileImageWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#000',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholderText: {
    color: '#999',
    textAlign: 'center',
    fontSize: 12,
  },
  infoBlock: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
    marginBottom: 10,
  },
  contactSection: {
    marginTop: 5,
  },
  contactTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  contactText: {
    fontSize: 14,
  },
  aboutSection: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  aboutText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  certificatesSection: {
    marginTop: 30,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableHeader: {
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tableCell: {
    fontSize: 14,
    paddingHorizontal: 4,
  },
  cellCurso: {
    flex: 2,
  },
  cellInstituicao: {
    flex: 2,
  },
  cellAno: {
    flex: 1,
    textAlign: 'right',
  },
  skillsSection: {
    marginTop: 30,
  },
  skillItem: {
    marginBottom: 12,
  },
  skillLabel: {
    fontSize: 14,
    marginBottom: 4,
    color: '#444',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  languagesSection: {
    marginTop: 30,
  },
  languageItem: {
    marginBottom: 16,
  },
  languageLabel: {
    fontSize: 14,
    marginBottom: 6,
    color: '#444',
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dotFilled: {
    backgroundColor: '#007AFF',
  },
  dotEmpty: {
    backgroundColor: '#ccc',
  },
  languagesSectionn: {
    marginTop: 30,
  },
  languagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 20,
  },
  languageCircle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoButton: {
    fontSize: 18,
    paddingHorizontal: 8,
  },
  languagesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoButtonn: {
    marginLeft: 8,
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  infoButtonText: {
    fontSize: 16,
  },

  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    maxWidth: 320,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  modalCloseButton: {
    marginTop: 10,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 6,
  },
  modalCloseText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  experienciaSection: {
    marginTop: 30,
  },
  formacaoSection: {
    marginTop: 30,
  },
  divisor: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 24,
  },
});