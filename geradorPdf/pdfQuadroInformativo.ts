import pdfFonts from 'pdfmake/build/vfs_fonts';
import { modulosProps } from '../QuadroInformativo/QuadroReducer';
import { ocupacaoModulosProps } from '../QuadroInformativo/QuadroReducer';
import TabelaDescricao from '../Tabelas/tabelaDescricao';
import TabelaOcupacao from '../Tabelas/tabelaOcupacao';
import { TabelasQuadro } from '../QuadroInformativo/MedidasTabela';
const pdfMake = require('pdfmake/build/pdfmake');

interface DadosProps {
  modulos: modulosProps[],
  ocupacao1: ocupacaoModulosProps[],
  norma: number, 
  tabela: number,
  construcao: number 
}

const {descricao} = TabelaDescricao();
const {ocupacao, grupo} = TabelaOcupacao()
const {normas, tabelas, dataconstrucao} = TabelasQuadro()
const pdfQuadroInformavitvo = ({modulos, ocupacao1, norma, tabela, construcao}:DadosProps) => {
  
  const medidas = modulos?.map(item => {
    return [
      {text: item?.medida,
        style: 'tableHeader',
        colSpan: 2,
        alignment: 'center',
        fillColor: '#cfe2ff',
        bold: true,
      },
      {},
      {text: item?.referencia,
        style: 'tableHeader',
        colSpan: 3,
      },
      {},
      {}
    ]
  })

  const ocupacoes = ocupacao1?.map(item => {
    return [
      {text: grupo[item.ocupacao[0]],
        style: 'tableHeader',
        alignment: 'center',
      },
      {text: ocupacao[item.ocupacao[0]],
        style: 'tableHeader',
        alignment: 'center',
      },
      {text: descricao[item.ocupacao[0]][item.ocupacao[1]][item.ocupacao[2]].divisao,
        style: 'tableHeader',
        alignment: 'center',
      },
      {text: descricao[item.ocupacao[0]][item.ocupacao[1]][item.ocupacao[2]].descricao,
        style: 'tableHeader',
        alignment: 'center',
      },
      {text: descricao[item.ocupacao[0]][item.ocupacao[1]][item.ocupacao[2]].cargaincendio,
        style: 'tableHeader',
        alignment: 'center',
      }
    ]
  })
 
  const reporTitle = [
    {
      text: 'E.2 QUADRO INFORMATIVO – MEDIDAS DE SEGURANÇA',
      fontSize: 15,
      bold: true,
      margin: [15, 15, 15, 25],
      alignment: 'center',
    },
  ];
  const details = [
    {
      style: 'Tabela',
      table: {
        widths: ['auto', 'auto', 'auto', 'auto', 'auto'],
        headerRows: 2,
        alignment: 'center',
        // keepWithHeaderRows: 1,
        body: [
          [
            { 
              image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFhUVFxgXFxcYFx0aHRgYGh8XGB0eFxodHSggGiAlHRcXITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYvLy8wLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABgUHAQIEAwj/xABDEAABAgMFBAYHBQcEAwEAAAABAgMABBEFBhIhMUFRYYEHEyJxkaEUMkJSscHRI2JygvBTkpOissLhFTNDYxbS8VT/xAAbAQABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADgRAAEDAgQDBQcDBAIDAAAAAAEAAgMEEQUhMUESE1EiYXGBoQYUMpGxwdEj4fAkM0JSJWIVNPH/2gAMAwEAAhEDEQA/ALrggghJIggghJIggghJIgjVawASSABqTshLt/pBaaqiXHWr97RAPfqrllxhrnNaLkqWGCSZ3DGLlOi1UzOkL1qX1k2ajGXFD2Wxi8/V84q22LfmJo/bOEj3R2Uj8o+dTHtZF1pqZTibb7GxSjhB7q5nwgU1JcbRi6uWYOyJvHUvsO78pitDpKdOTLKUjYVnEfAUHnEFN3xnXNXykbkAJ8wK+cR9sWO9KrwvIwk+qdQe4iLENzpVcr9kijrjeJtRUSa0B7tsRjmyEi9rIp7aClDDwBwdoddLdbdfRVu9aLyz2nnFV3rUfnHKW8R0qfGLfuMwhEqwFIAW5jzIFagnI8h5QrXIlertNxs+x1w8CBHDCezc6p7K+L9XhjA4Bfxzt0SQGwNlOVI6WZ51HquOJ7lqHzi6mhMmYUFoZ9Hp2SK9YTQajSlcWzdFcNSbTtrBCEfZF0nCRQUTVSsjoCQcuMJ8Jbax3suQYgyfi5jB2W8RsQR4G41UfLXtnW9H3DwXRXxETsh0kPpydaQsb01QfmImLwSFnNuYHJNwAivWNIVhz/Dt5QjzUgy7NpZk1KKFlISV1qFGta5A0EOdzY/8rpsYpKoXdEWixN7C2XePorHsy/ko7QKUppR2OCg/eFU+NIZmnAoApIIOhBqD3GKNt+w3JRwNrKaqFQUmtRWmlKjOPGzLVfllVZWtBrmNh/Ek5eUObUkGzwh5MGjlaH0z7g9fzqr7ghAsHpESqiJpOA/tEA4fzDMp8x3Q9MPpWkLQoKScwQag84LY9rxdpVLPTywG0gsvWCCCHKFEEEEJJEEEEJJEEEEJJEEEEJJEEEEJJERV4LfZk0YnVZn1UD1lHhuHE5RG3uvWiTTgTRTxGSdiR7yqfDUxU09OOPLLjiipatSfgNwG4aQPNUBmQ1VpQYa6o7b8m+pUpeO9D84SFHA1sbScvze8e/LhHpYd0JiZooDq2z7a9v4RqfhxiEk3y2tKwAShQUARUGhrQxbtoBmclmpkrdS02OtUlsnPDqkpGpBECxtEpJedFb1spomtjhaADle18/yeqrm1bvKlJhpp5QUhaknEMgU4gFZbNYcekadflwwGFqbboRVGXaFMIrupXKOi0mZe0ZVcwpC2yhKwhasvVzqM6EGICzr9oLAam2OuCQKHI1ppiSrbxiUtay4vYHMFCiSWoLJHM4nR5OblmTuFMWy76VZAfdAxpAUDT2kqwEj8Qr4xiXtIosyVmBmWFpxDekFTSh+6fhCpea9q5pAbSlLTKaUQnbTSpyFBu0hf69WHDVWHdU0+kdDnvf8ApgnK2QSNLHFB/UPawcRdYkZAi1la1vW4w3MSakuIwBayuh0CkkVIGmaqxByFsyyLUdmOtHVLSaKwqpiITUUpXUHZCEDwTAcXDzgoUVa7MR23zPcgRX4RE0tM97gtNgTqb/6kdytJFpWemaM16a4VGtW+1g0w+rgrsjhsK1GZi1FzAIQgN4UlRwlR9Wue0isV2e4Rin3R+9/iOvoq0H+36rjK/CXXAqDcjhu4HIZf9Fclot2j1qlyzjK2yeyhWwU3/wCYXbiSS3J+YedAxNqVipoHFqUDh7qK8YRJedcbzQpaPwqUPgYlrCvQ/LJWlBQQ5UqxJqcRyriBrXvrAcl2PBkaQj4YBJA5tNIx1xa4yNr53THJs+nWstw5tMq5fZnCkc1AmJq1pSWmppUs7KrSrDVMwlNK5VPapsrTOsLd0bzS8rKug4vSFVUKioWqnZAI057zDHZlrvmyi+FhTqEuEqUMVcBVqMtgh8ZaR3m5KHq2StfdoIAsxudsyNfC6ru8dleizC2cWIJoQdtCKivERmw7fflFVbV2T6yDmlXLYeIzhnu1d8TmOdnVkoJJ1piw5EkjRIpSnCPdVhWfPpWJFRQ62K0IUARsyVsO8RAInDtNNug3Vm+ui4eTMC61g51rgH+bpnuzelmcTRPYdAqps696T7Qifj58qtpdQShSFag0KVDLI+MWhcy+YmKMv0S97KtA5y2K4eG6CIakPydqqqvwswfqRZt+n7JzgggglVCIIIISSIIIISSIIIISSIWL6XoTKIwIoXljsj3RpiV8htiRvLbSJNkuKzOiE7VKPy2k7gYpWcmnH3VOLJU4s9/JI3DQAboHqJuAWGqtMNoPeHcbx2R6r1lJZ6aewpq464SSTn3lR2Ab4bJ277LaBJtI6+bWQpSwcmu87E8NsQ93rRes54LW0sIXksKSU1G9JI1FYsSdbLrCnbP6sOPlOJzQkaE194ceO2IIWAtPXdWWIVMjJGAWDNiDlf8A7WzsOm5VPzUuppakLFFIJSobiIZrm3sEmhxtxKloIxIA97QjPIA5Z8I9r0S0pKs+jp+1micS3a5pO2vf7vMwm7aD/wCfWGxxS8wNjFz3IioqaaSjMlT2WdTle24GufRT94b1PTXZJwNVybRpwxHVXwiAzOmXxjKUU798bRo6bBmN7U54j02H5+ixFd7TyW5VEOWzr/ke++y0DY57zG/61ggi5axrBZoAHcAstJI6V3E8knqcyiOebZK+rSFFOJ1pGIajGtKCabaYtI9lrCQSo0AFSY7JOxlYEzjy8IZcQsMUzoUqU31h2LK+rOD2U5nWgErqlsURBOZBt1R2GUkk84LRcAi/muOZbWyvqnChVcXVup9VzCaHI+qsbUmCJKzZRuZbdS+ohCCh3HtS4SUAp4nFXjhERbOIYkr9dtSm1095BKTThUQNhldz28Ltfsj8fwkUMx4Phv62XrGhQDs8o2gi0c0OFnZhULHuY7iabHqMitDXv+PjHZKWq6hC20OKCFgpWjOhBFDkcuYjmjVSAYqKrBo5O1F2T6LUYf7U1EXYqhzG9+bvn/PmrFu+8mds0yaFhDyBSh9oBWId4OhpHfdqxk2Y05MTKxjIpkagJGYSPeJPwEVYhxSCDUgjRSTQjw0iZsZ8zEyyiZdWtBWKhaiocBmTSpoIoZGuhkDJG2cMh0WrjYyqhc+nlvE7tOFu1la489l02Vd1+0FuvJwoSVqJKvePaoANaVGcRlsWQ7KuYHRhOqVA5KG9J/REWNYjTbEzMSASsNOJ6xFdlQAoJO6hFDwMLt655tMqJReIvyzgSFKzJTQ9qu4pUkU3xC+JoZcnP7oinrpDOGNHYysLZ8J38t1P3Fvb14DDx+1A7Kj/AMgH9w84dY+eWnClQUklKkkEEZEEaEGLkuZeITjPaoHUZODfuUBuPkaiJqabiHCdVX4ph/IdzYx2T6FMUEEEFKnRBBBCSRGriwASTQAEk8BG0JPSZbfVMiXQe2963Bsa/vEU7qw17g1pJUsMLppGxt3STfC3jOPlQJ6pFUtjh73ede6kNNyrDLEuqcLfWulNWmxTJPDifhFcxP3ZvQ9KGiTjbOqCcu9J9kxXRyN5nE9ayro3+7CGC2W3+w6X707WFeVufKpWaYCVkHs6g01GeaVCFB+037PeflmXOxiIFc8NcwU7lUNCdtIbZq8kkGjPNJSXynAAcl4jsUPPFuEVfMvqcWpSjVSyVKPfmfPIQRwvkc1jDd537t/RVkLoYmSzSt4YgM2n/YHZYUoqJJJJJ7StSTtz38YwlFNIykUygjV0dFHSss3MnU9VgsWxaXEJeJ+TR8LdgPz1KIzGIINVSswQRgwkl12JZomHVFZAal0dYoH/AJVpBWlum6iSo8KRo/OKU1hKqlTy3F8VFKACf5/OCzFLQ04UVxJmArIV7K2gjmKoUD3xy+jq91XgYxOK1DnVDgTpcaheq+zFJFHSNfcZ2Pnnf6rXGaEVyOdOMSt5ZRtDgebPaJQJkVyxuAlKhuIPYUOIiMDC/dV4GPWYaV6O8SFVW4wBUHMhwOE8kpVn3RDh0xZM0A6kb/uivaCnino3OedAbeJXnG0aiNo3i8gRBBGISSxGKYe7fu57o3ggWrpGVLOB/kVY4bic1BLzI/MbH9+h2ThZ3SC822ErbS6oCgcJINPvZZwqT82t5xbrhqpZqT5ZcgBHMMsth0+kM10bKlXQ47NPBKWqVRXDUHbXXXKgjGTQzNk5LzmP5fwXp9HUUXI97hGR1AvcHcd2eyiLLsp6YJSy2pdNSNB3nQR6WHai5R9Lqa1SaLTpiToUn9agRaspazTLHWhsMywH2Yw0W4dmFGyuyuZ4RWF4GnXHFzKmFNIcXlVJAqe8DM0rzjkkfKALTmnU9W6rc6ORoDbWzOd+neetldUlNIdbS4g1SsBQPAx7xXHRfbdCqUWcjVbVf5kjwxeMWPB0b+NoKzVVTmCUxnb6IggjMPUFlqV0BJyAii7xWp6VMuPeyTRA3IGSfEZ95MWjf+0epk10NFO0bT+bX+UKiqrAKPSWes9TrU6941gOqfchgV9gsPC19QRoCB8s0zWV0dPOthbjoaKhUJw4iK6YsxTuiCvFdt6TUA4AUq9VadDwNdDwhuv5Zk6t8PM9YpsJASGyapOdapGvfnGbzPuiykJmv99ak0BpXI4s+OHWGviZYixFt9lLBWTXjeXtcHm3DuNvHJVxWnPLxgQmnftjBzNPd+OUbxfYJScEfOdqdPD91lva3FDLP7qw9lmvTi3+W3zRGKwUjRUXE0jo4y5ouRsseAtiqDFHnADFHJjL+LsNy706y9I9WkgqSDoSATwJzjyRG0XjTzI8srj1IXGmzrqz2mkpASkAAaAbo3hTupOOOKLanFYUpqnTLMDUgmGdqUUpQSHFVJoPV/8AWPG8Sw2SlqjBI/id5m99F6RR1jJ4BIwWGeXgvWMKSCKEVrvzj0tKy1NLp1q6EVBojn7MK155x1nAlDqu2FVqE7KaEJFIVNhUstWKRrgH+eVs7rtRWtigMzm3b+UvWu2hLziUeqFGnDhy0jjMZrGDHskLDFE1rjewAJ8AvOJXh73OAtcrGKAKjSsYpFG3GHh/abl3arll6AxtHmiPSLmmmdNGHuba+y5ZYUmop+hHRZcylt1C3EBaUKBUg6frOvKPCNFChryPnSAMYpebFzG/E31Wm9mMR5FR7vIexJke47Ed6uOzrWem6KaYS20NHXszTehA1y21AiJvpeSWLC5avXrIoSmgSlQ2kjKoOwc4X7ry81ONmWTMdWy3mU51odgpmRrtpDGmybMs8VeUFuD3qKVybGQ8Izwkc9lxkOp+wWmNPDBNwuuXA5Nbe/iSd1XEhOKZdQ6j1m1BQ401HMZc4viRmkutodRmlaQodxFYo+35tp6YccZQUoWa4TQGu3IaCLD6LrSxy6mTqyrL8C8x54hDKZ9nFl7ovGYS+Jk9rHcePXvunSsEFYzBuazfLPX0VZdK09V1lkaJSVnvUcI8knxiEuxdZ2cClJUlCEmilEE1VkaADvjW/Mz1k8+diSED8oAPnWHWwLHU7ZrbTT/VLUesUpOZqTWhoctnhAPCJJjfQLT800lFHwGxdva9r3ufsoaZt2es1QYdKHU07ClAmqdMjkctxhWtu23pteN5QyHZSBRKRwHzh6v9d2ZfLam0haG26HtAKKtpoctg27TFZL3bzCc17pBFc2JC7Sy07aZ1WQ3ja0l1vO2Wx8PkstDLzMbwQRumMDGhrdAAPReTSSOlcXu1JufNMd07KZm0vMq7L2HGyutMwKEKG0VoeZhcmGVIUULFFJJBG4iPeQnFsuJdbNFIII+h4HSHa0pFq1W/SJchMykUcaJpip+slbsjFNiTJm5sceE6jZGMY2eINbk9vqPyFX0amOmclHGVYXUKQrcoU8N/KPEDKKqkpnTucGnMC6DILcnBZSY2jyjIMXFNiBa7lVAsdL9U1T9zlUfI3oV8QYtO78nl1h25J7t8VlcSTU7NoSnQJUVncnMfGgi0bw2miTl1OkeqKITvUcgP1xikxKia7EzVOzAY23jnc+X37lrMJkc6kbC0Zlx9dvnmuu1ZTrEUHrDNPfFSX2P2jY3JPmf8Q79Ht41TTam3VVebNSfeQdDyNRyEL/ShZJQ4iYT6ihgV91WZ86+I4w+ipo318dUDbIjxuMvlmpMWbJDTyU7xmCPQ3ukaNSY1UYxF5VYiIzwRDicsesGMkRthjeWYU4QlCVLUdAkVMUlVSyRcLpMy6+ScO1kF5w12lYrcrJIU6msy+cgSfs0a6aVpQfm4R32Hd1EmBNz5CcObbOpKtlRtO4eMLd4LYXNvF1WQ0Sn3UjQd+0njB+GxzvIuTwjO2yM5YgjJf8R0HTv/AJoo2NVioI3xtBF+QHCx0KBaSDcLssFxZdQhDpaLpDalDieHGkWAm5sjLDHNPlR1ONYQDyHaPjFZNkpVkaGoIPeSfjDnf+damG5d9K0lwoopIOYBGLMcDXxjDvYIXPaRmDl4fRerMmkrGQSMcWiRuZAzuBuddl43xnZBbaG5VNFJVUlKCAQRQ1JzOwxp0az3VzoQdHUqTzHbHwPjCmkV0Fe7OO6xZnqphlz3XEHlUV8iYGEhLw5WMlG1tK+IEnInM3N9VfWOMxnKCLi4WItJ1VAWq9jecX7ziyeajDRI3GmgyH0OhCynEEAkHfTENtIT2AVkDaSPFVPmYu5dnPGcbeS7RhDWAt1Oau1nTTanwishjD+IkXWtxCpfTsjYwgZbi+lsvNJkom00yzjjr2FoNqOF0YlkUOm0ajUwgkacAf7RFjX3FodW4tZbRLjLChWZSThGKuZ1GQiudvKDqFv9ZG3PK+vzVXiMv/EzydkcVhZuwJaLHvst4IIxGvXmqzG8u+ptQWhRSoaKBoRzjSPeQaQpxKVqwpJoT+tK74jleGRue4XAFzvonxtc54a3UnJMspfx8JwPttvp+8KHxGXlELb88y8sLZY6nKikimEnYRTTbXlHTa1gpYbK+sr2gECmo4nfEJAFBLSVQ59P4bj6o2s95hPKnPfsfXVamNSI9IaOj+wvSZgLUKtM0UdxV7Kfme7jE1dDE+ImQab7oSGMyPDBuni4Fg+iy+JQ+1dopXAbE8viTCP0jW/6Q/1ST9mySPxK0UeWnjvh6v3b3osucJ+0c7KN43q5DzpFLExkquSwDF6d7PUDWjmnQCw7+pUhYNqKlX0Oo9k6e8k6j9baRdkyy1PSpFatvIBB3VzBG4g/CKEixei23qVlVn7zf9yfmOcR0kljwIzHaISR84DMZHvH7fRItoyK2XVtLFFIUUncdxHAjPnHgBFm9J9h4kCaQM0DC5xTsPInwPCKyjV4ZDE2PjbruvKauAwyFu23guuzH223UrcR1iUmuCtAojTFUaVhmfv88Bhl2WmE8E1PyHlCeI77HkA+soK8JwkpyrUxNV8hjDNPo0Z9w8E6mfMSIojmf5qvCenXHl43VqWreo+Q3DgI8IlLasxDAQAsqcPrJpl3jdu4xFxJR1MVREJIvhOmRGniB++qjqYZIZCyT4t87ogjEZglQLU69wP1h4u5almNS6OuaSXhXF9mVE55GpFNIRz8z8D9IaLtXNXONdal1KQFFFCkk5U3HjGSxMObWu4RmQF6PghifhDBM8tAc4ZeOiZFX8lgChmVcVlTJKU5dwrFaO5E5UoTltHCLWurcpUm91pdC+yU0CSNaba8Iri8CaTUwP8Auc/qMV04fwgv6q4w403NdHAMrDMkm/zAVgf+Tfe84IqT/UV/oxmHc4oD3JnT1/ddTdRTYRTkRSG2wGrUfGJl5wI99a+ye7FUnkIWbSawOuJ91ax4EiLIvLaT8tKywlAQhSE1WlOKmQIHCuZrEcQHaJvYdFaVchLYmsa0l+hdoMrpevSLSaaKJleNpRHaGEioIIBISCMwIUNvKLNseYmH7PmvTASMJwKWnCSKV0oK0NKGKyOz8J/tMWGH9msjd1vr4KlxMmTC6iOwuwi/Doc2reMRmMRsF5qsxuw6UKChqkgiuYyjSJGx7CmJo/YtFQ2qOSR+Y/KI5SzhPHp39+SkjDy4cGvcpWy7f6xSm5gJKXNMsgdKHhx2RzW3d9TVVt1UjdqU/UcYmG+jSZIzdaB3do+dIl5SxplhvC92wk0SpHa7P3tuWeyMdW/8a/3nDrFuXFHnwm24G3ktLTRuq2cmsGez8rjuNlWyGFFYQEnGSEhNM6nZF33fstEnLJbqOyCpatKqOZPy7gIg7uXdT6SqbUScqJB2L0JHLId5jm6T7e6tsSyD23RVfBvd+Y5dwMGTYmKmBjwLC1yLWz6eSlwzCXtnMYzJNh4DdIt7bcM3Mqc9gdlsfdG3nrzEQ0EZigc4uNyvTIomxMDG6BEekrMKbWlxBopJCkniI84xHE8gEWIV82JaKJ2WSugIWnCtO46KH63xUF5bHMpMLaPq+sg70GtOY0PdEp0cW91D/VLP2bpANdEr0B56eEPd9bvibaSQaLbNQqmeE+sPAV7xGhw6uEfbdpv+V5vj2FOa8sb4tPUdPI5KqbPstx5QCUkbSojIDfx0OkMM2tqRawt0U6sanXvPDcInpWXPZaaBUpKcsqgACgxHQV2V5RFq6Ppt0lbjrYUrM5k8tIr4KqTF5b1J4IG58OfbN8tciOo02Qj6UUMdoBxyHInLsjcfvqlO0LSW9hxkEpFKgU8c9chHHDPadxJxoVCQ6B7hqf3TQ+FYWCCDQihGVDlGvpRAyMMgtwjQBZ2pE3HxTXv1KxGYIIJQ6wfn/aYnrMs+eMsXpdTnVhSgUoWQailThGvLPKF8jPxixejFx8IeyUWkoxNpIoFLOuE0z0HjGSxOz60t7h9Lr0fBHugwZsjbfETZ2+dsku3bvEuXmQ4+t1aQFApKiTUigyUaRFWxNJdmHXU1CVrKhXWhNc4tJ6w259sqmJVUu7T1qpxeIPaH4hFRPpoVAGoBIB36gGK2VrmgNJuLq9oJoZpHSNbwuAAIytbut9VHeiK3QRZ//jX3fKMwuU9Ae/RpZvrL9XPPjevGPzgK+JMSV3L8uSzYaW2HUJ9XtYVJG6tDUR19KsnhfbdGjiMJ70H6KHhHn0byTSzMKWgLUluiUkVyVirTiaAQ4B4nIabInmRPw5r5W8QA00OttfNelp27O2i0tLDGFoUDgSqqiNaHQ04AQjOJIOYoQcwciNmY2f4hmubaMy0+G2EEpWtOJBTWgzGaqdmg28I36SZNKJxWGg6xCVqA2KOJJPPCDHWyEETXzBHyXHRMPHRBo4XtJFjc6b9/2S1GI1bNR4QRumuDhxDQryR7HMcWu1GXyTJcq7vpjpx1DTdCuntE6JHfQ1iyrYtmXs9pKSAMqIbQMzTcNAOJjmuBJhqSbO1dXFHvOXgAByirLw2oqYmHHVHIqITwQMkjw8yYqOE1U7g49lqueIUdO0tHacmt7pMer2WEBO4qJPMgCJmw79CZIaDKg8o0ABqmm1RVsA1pTuip6w/dHkxJyyVOvPIDq8gk6pQD8yK91IFqH05PLgbc7nNR0lXPJJZzst9FYr7qWW1KwkhIKqJFSduQGpPzik7WlZyYeW8th7Es1p1a8hoAMtgoOUXXI2k08jG0oLTUiqQSKjXZHs1MpUKpNcyMgdQaEabCDAEsPMyvZauhrvdSXtaCTub/AGVB/wCizP7B7+Ev6QCxZn9g9/CX9Iuh69MmhRSqYQFJJBBrUEag5R1NWywoBSXAUkVBocx4QPJSMjF3ut42H1Vg32ikcbNY0nxJ+6o3/RZn9g9/CX9IP9Fmf2D38Jf0i83LXZAJLgAGZNDp4Rxf+XSP/wClvxP0jkdKyT+27it0sfouv9opGfExo8SR91TKbGmf2D/8Nf0i4rn2i49Lp65C0OI7CsaSnFT2hUZ1HnWJGz7WZfBU0sLANCUgkA7tI6kvpOmw00OvhE8cHKNwSgazEzWNALRloQSoG1LcZkDhdQUoUCpCkiuJW1J3KzyrlTuhVmOk1wq+zYSE7MSiT5AAROXutKRmGXGFTDaXEk4a+y4muvPI8KxUZg6B0EbrTNy21Cy1fVSscBG7L1VqWF0htuqCH0dUomgUDVNeOVU/DjHvfi6qZhsvNJAeSK5f8gGw8dx4RUoNYt/o2tNT0phWSVNKKKnUpoCmvI05QbUQiC08JyXKSp95vDNnlkqgjaJa98mGZx9AyGLEBwUAr5mIdRoK7otmPDmh+2qp3xlryzfRA1Ph8f1yixFWvPycu20iUolCEjrM3K5ZmidOcI1j2e6+4ltlOJzNVMgMjUk1y2/KLbs2anGWXHJzqyltJUOr9Y03nSMY55llfJc57+C9OfG2kpYICGuLRm0k3uRsPFVlaF6px2oU8oDalHYHPD8zHBZUv1jzTfvuITyJFfKsPl9Zlh2RbfSylK3iAglICwNSajXIfzQv9HUl1k6g7GgpZ76YR5q8oGcw8wNJurKOoZ7o+RrOC1x56a755K5KCCNKRmLayx3Mk6JW6RrO62TUoCqmVBwdwyV/KSeUVlYFsrlHg6ihyopJ0UNx3b4vN1sKSUkVBBBG8HWKHtqzjLPuMn2FUB3p1SeYpFdUt4SJAtJgsjZI3079NbfVPD3SQgJPVyxCztUoAV3mgqfKEO0p9b7inXDVSsz3bABsAjlCYKwK+VzxZyuKehgp84259b3QTQ9/xjJjChXLw4RjHlx07jGowitDoCx+rfULz32rw0w1PvDR2X69zt/nr++St671vMNWc0t1YSEpKKaklNRRI1JionTUkjSpp3bIympoMznQCu0035CLAkujVSmKrewvGhAAqlI3Hae8ecVxldI5wYbNcde5UzjLVgNa34Qq8pGwhpeuFPA0CEqFdQsU86GGC7fR6ULDk0pJwmobTmCfvHb3ARcQGlpGXYbn18ugUDKGZ7rcNkwXBkVMyTYXkpeJdDsCjUV5UjwuLafXiZochMLKfwqooedY8L+3jTLtFltQ65wUy9hJ1J3GmQERPRE7nMI4Nn+oQEY3OhfM7qrjmtZPHC3YH6Lkty6j8xaD/VpCWyUqLivVFUpJpvNa5RLsyPo6QzixdX2cVKVptpshlty125Rtbq94ASNVKIFAPjyhTs60VTKOuUACpSshoKH9Zxnvad8stEwn4WuA87FWWGRRRVL7fE4E+V10rY6wFutMfZrurl84Tby3Sek+0ftGv2iRp+MbO/SGm0pxTDSnU0xIoRUVFajWGS7tuNT7BqkV9Vxs50r8QYb7JSSwQSSNHZ4gD8lzGYYp5GscbOtkue6DSZWzkLVl2C8r8wx/CnhHn0e2mZiXUpR7fXLKvznGP6qco87+vhiz1NpyrgaT+HL+0EQi3Jt8Sb9V16pyiV8KaK5VNeB4Rp2QOmifJvdVj6gQTMiOgC5r4yKmZx5JGSllxPEL7WXMkcogyIu28dgMz7aTiAUBVt1OeR/qScor6auBOpVRKULGxSVgV5KpSJ2SU9REGTZEICpoZGPJYLgpSpFmdFEy2G3W8Y61S8WDbhAAqN+2tNIj7O6NnlAl5xLZp2QntZ/e0HhCtalmvSb2FdUrHaSpJ1GwpIz+cVMj3Q3ja7iauQslpXCV7Ml3X2mQ5PPqGYCgn91ISfMHwiAXu5mMqdzJUanWp276/rbGqRtOprB9ZXMjo2iM5uFh3W1Vt7P4ea6u5zx2GniPedh91J2NbLsqpTjVMShhqoVoNchDFYF+nELX6VidQ4AMgOzSuichQ1hMEbRmmSOZk1ejz0cM1y9uZ1I18ip6+F4BOOIwJwNIFEA8aZ0GQ0pSG/ors7Cy4+Rm4oJT+FH1UT4RWkswpxaUIFVKUEpHE5CL5smRDDLbKdG0hNd9NTzOfOCKYF7y8qoxYsp6dtNHvn5f/V10gjEEG5rN8zuKzCB0oWNiSmaSM0UQ5+AnsnkVeB4Q/wAecwylaVIUKpUCCDtByMcewPaQp6ed0Eokbt/D6L57EESl5LHVKPqaOadUH3kGtOY0PdEVFQWlpsVuo3tkYHs0KIwoUz8fqInLsXdcnHKJ7LaSMa9w3DerhEzfm7DMqht1lVEqogpJqSfeSdvGCKd0kZ5zNvUb+Srq91LU3opT8XodR5pMEMdg3xmZUBFQ42NELrl+FWo7sxC2DT8Pw/xG1Y19LLT1cI4Wi3S2i8wr6KowyfgcbdDsR+eoVkt9JzdO1LrB4KBHjl8IjLV6Rn3AUsoS0D7ROJXLKg84SoIe2ggBvwqB2I1DhbiWzrqlEqUSpRNSSaknvh36JVfbvD/rT5K/zCNDT0bzwanAk6OpKPzZKH9NOcOrG3gcAmUTgKhpPVSHSxMHr2m/ZCcdPvElPwT5xpc9VZcjc4r+0/OJjpPsdTraX0CpaqFga4DnXkfiYgblLq04Pv18QPpGU9oQH4Lcf4ubfzJWgw8OZihvuD9l13qVSWXxKP6kxwdGUwUzoSNHEqB/KMQ+HnHVfFVJcjetPzMdXRdYysSppQommBuu2tMRHCgArxMN9meFuEvJ3cfsligc7EmAbAHyuV1dLaj1bA3rUTyGX9RitYeOlWfC322Qf9pJUrvXSg8Eg84RY1dA20AuqLEXB1Q5Tlg3pmJTJCgpFc215jkdU8vCG5jpNRTty6gfuqBHmBFbwQ6WjhkN3NTIq2aIWa7LvT1aXSS6oEMtJb+8o4jyTSnmYSpyZW6orcUVqOpP6y7hHlGijXIabTv4CIpTT0cZc4ZepRNNFVYlMImG516ADqfsN1qBU12DzOflG8MN2bsKmQXFrDTCcis7TuTXLbr8Y57WsJSFr6gOOsoNOtwZGmtCMiAcqiMhUPkmdzHC3QDYeHRenYdHS0LBSRnManYu3z692yhoCYI6rKkFzDqGmx2lmncNpPADOBxmbBWr3BrS52gTf0Y2NjdMyodluqUcVkZnklVO88Is+OOybPRLsoZR6qBTvO0niTnHZFrEzgaAsNV1BqJjIfLwRGYxBEiHuiCCCEuKBvhYAnGcIoHEdptXHaDwIy8DsimVtFCylaSClVFJ0II1HAx9CQmX8up6QC+yPtkjtJ/aJH9w2eEDVMPEOIaq3wuv5DuU89k+h/C87FtBEz1ctKILbKEpU+rQ09wEaqURmrdWkd9pWI0/Mp9IXiCRRqXRoE7VLpnu3DIDOKtsy1n5Yq6pZQVApVkfgdozpuqYcHLzMSssPRVFyYeGJxxeagreviM6J0EMjmDm9rb+ZIiooJYpRySTfIWzOepc7byzOijL+2Uww+AwRiXmpoZ4CdKbq7oU8NNNN30+kWJcexPWtCaO9aCo8y4r5f8AyIR6TNpzjplkIbSBWpyBpkCqm1R8hCY+WF4liNidB1Hf3KR7aeoidS1HaawZv6HuSwlVYzHpPyS2nFNrGFxBoRke7gdR4x4VI1z7vpGhpMXil7MnZd6LHYj7MVMH6kH6jNctbai48P4FvGUqIoQaEGoI1BG0RoFA6GsbRbizhfULMkFpsciraujfBuZSGnSEvAUocg5xTx4Rm0bKaYcq0gI6ztKA0xDcNmsVEYb7pWi64VIccUsJSCkKNaZ50ryjJe0lCG0Mr2HLIkeYWkwiv5lQyN4z0B8imqUstqZWEupxJT2qVoCRkK01GZyjtvLedmSbwJopylENp9nYCqnqiE69VoushAaWpGPFiwmhIy26wmE1JJzJNSTtO8xH7MUPMoWOeezc5eZT8YruVO5jB2ss16zUwpxanFmqlkqUd5Pw7o8oI1KwNTSNjbhGlgswbud1JW0aqIAzjGKunif1nAlPM/rSKqrxeGHJvad02+a0eG+zNXVWfKOWzqdfIa6dVggngPjEvZ13ph9pbzbdUIHNVNQgbafKJJ24s0GOuwpKtS2D2gPgTwjNyrzGTcwOE9Ss9oe4rTFw4j6Rm55pJpOKc/YDy2W5pYIaWmLcOsSCL7k55+KmLBtuRMm2zNChZOLCQSFEFRBFPW10O2GazbWdW4rHLdTKIbqFroDspkDQClctkKl97vdSROS1MBIUoChCTqFAaFJ28TC9a16pqZb6t1YwbQkBIV+I7fhC5pjyd3ab5IZtCyr7cOh1uT2DvYaKNnnEqcWpAolS1EDvJoP13Ralwrteit9Y4PtnBmPcTsT37TyGyIm4N0yCmafTnq0g7Pvn5DnFhQ6nht23aqLFK4P/AKeM9kanrb8W+aIIIILVKiCCCEkiCCCEkiCCCEkku+tzRMVfYAD2qk6Bz6K47YrAAtrotOaFdpCqjNOqVbeEfQcLt6bqNTgxeo6BksDXcFjaPMbIGmp+LtN1VxQYoYRy5c2eoSLei95m20MtILaKDGn3laBIpqkedRuhyu3Kos9hltz/AHZhaQd+I7O5I/WcVnatkvybgDiSkg1StOhIzBSRyy1jqbvG65MSzr68QZUnOns1BUctSQPKIGylryX/ABKwnohLA1kB7GZO5Jtl9k8G7KHZ6afmEgshKaA6ElCcR5D4xXTkoHpgtyqVYVLIbBNTTeTu28BD3fy86FsJal1hfXesU59jSm+pOVO+Oi7NhKkZVcwWi5MqQSEDMgbEjyJMPkYHu4QMtSfVD01RJBDzZDmQGsaTllv3Z+qrm1rGeYIDzRQTodh7lA5+McWew+MWP0m1MvKqV61e13lNT3ZxxXVuywuUVMuoW8rtUbQc+yaUAqKnbmY6wzRP4YnEWz/myfIaSpphNVxNcSbZDO/jrmkXPh4x7S00ttWJFUkbQU/WGe8ljSglw/LKKTljZWoYkgmnqntAgwqBJOmcTuxSqALH2I7wCD9EPF7PYXOOZG1zSD/sRY+vovSanHHDiXiUd5KdPGPHPcPGHaXuKhDaVzcwlgq0TllwJJ17ojL1XZEphUh4OIVlsCgdRUVzB3iHf+QrGMs0NaB0AFvK6hiwXB5JbdtxO5JsfO2aXKHf4ZfON5eWK1BKE4lqIAG0k7qxZ0vYMozLNzDcoqZUsIITXEe0K1oTQAVhevkXwGHVSqJZKFEN4SCa9k9rDkPVgaofM5t5Hk+CNofco3hlNC1pzFza9x0BzWZK4q6BU08hkHKhIKid2tPjHFe+7HoRQUrxoXUAkAEEU1pwPlD5PrlpmUanHmi4ltPWYU7CaBYIqKgEHLhHFemy02gwh+XeqEJOFBICTvqdUqypnCdA3hIaEyDEpuc10zrNJIdkLdw6+KlJZ595mTfYUkVA60KrhKCO1pniBTl3mIO+UlIPIW8l5tDqDhUU54le6pIzJ4jOIBi84bs5UmUkuErTWtAlJNa1GuZIoIX7Os5x9YbZQVnhoBvJ0Ajj5gbNAun02HvY90hfwcJyPUX18Fs5azymQwVKLSTkjv2cRuHGHe5dySCl+aTnqhs7DvXx3Dx3RL3VuW3K0cdo49sPso/AN/3j5Q2w+GnI7T9UPXYmHgx04s3c6Xv4bIggggslUqIIII4kiCCCEkiCCCEkiCCCEkiCCCEkvCclEOoKHEBaTqFCohAt/o6Oa5RVf+tZ8kqPwPjFjQQx8bX6hEU9VLTu4ozb6fJUItl+UdBUhTbiDUYk7d4rkrlURJTF85xa0r63CUilEiiTxUk1BPGLhnJNt1OFxCVp3KSCPOFO1OjqXXUsrU0d3rJ8Dn5wK6ne34CrmPFKeUg1MYuMr2uPlql++d5WZyWaCCesSsFSVJI9lQJGwitNDEpY1nuNyyH7PcLilYS4y4pJScqKoMiFA8YgrQ6P5xvNAS6PuqofBVPjEOqUm5Yk4H2t5GJNeacjDOJwcS9qnbDBJCI4JBa97HQ32Iyy6J36SmWzLtOOJSmYJSKA1OlVCu0CmvCK/sp1KHmlK9VLiCe4KBPlnHjMzTi1VcWpStKrUSfExpWIpZOJ/FZH0lLyYOU519fDPorPv7Iqcdlng2p5lNQtKAVGhodBnmNscl6rGl0yBfblupcqjJXrgYgKHM6iFezr2zbCAhDvZGgUkKoOBOccVqW2/MkF13HTROQA7kjKJXSsNzbMqvhoJ2OY0uHCw7E3Ivf4VZFz31vWbgQ51a0BTYXrhpmDQ8CIX7w2WylpZetBTzwSShGPEMW6gxU8oVZWTmHBgbQ6pJ9lIVhrx2RMSFxJxzVtLY3rUPgmpjoc57Q3hvkkaeKnldI6YNBN7AC/zzPyXlZN63JeWXLBCVhRVmrQJUO0Kba5nXbEPKocX9k2FqxH1EVNe8D4xYtl9G7SaF91Th91IwJ+aj4iG6zrNZYGFptKB90Ur3nU84c2ne63GdFFJilPCXGBlyTck6X+qrywejxxdFTKurT7iSCo95zCfM90WHZtmNS6MDKAhPDU8SdSeJjsgglkTGfCFTVNXNUG8h8tkQQQRIhkQQQQkkQQRmEksQRmsEJJYggghJIggghJIggghJIgjMEJJamAxmCGjVJnxrC49UwQQ9/wqAf3CkW9uqoqO0/XPOMwRWzarSYbo3z+i0s7/cEWfdPZyggjsfxBFYj/AOr5lWMrTlGDBBBrfhCyP+RQIBBBDjqpX6hEEEEdTyiCCCEuIggghJIjJgghJLEEEEJJf//Z',
              width: 60,
              alignment: 'center'
            },
            {text: 'QUADRO INFORMATIVO MEDIDAS DE SEGURANÇA',
            style: 'tableHeader',
            colSpan: 4,
            alignment: 'center',
            bold: true,
            margin: [0, 25, 0, 0],
            fontSize: 13
          },
            {},
            {},
            {},
          ],
          [
            {
              text: 'LEGISLAÇÃO',
              style: 'tableHeader',
              colSpan: 5,
              alignment: 'center',
              bold: true,
              fillColor: 'gray'
            },
            {},
            {},
            {},
            {},
          ],
          [
            {
              text: 'Norma adotada para definição de medidas',
              colSpan: 2,
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
              fillColor: '#cfe2ff'
            },
            {},
            {
              text: normas[norma],
              colSpan: 3,
              style: 'tableHeader',
            },
            {},
            {},
          ],
          [
            {
              text: 'Tabela',
              colSpan: 2,
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
              fillColor: '#cfe2ff'
            },
            {},
            {
              text: tabelas[tabela],
              colSpan: 3,
              style: 'tableHeader',
            },
            {},
            {},
          ],
          [
            {
              text: 'Situação da Edificação',
              colSpan: 2,
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
              fillColor: '#cfe2ff'
            },
            {},
            {
              text: dataconstrucao[construcao],
              colSpan: 3,
              style: 'tableHeader',
            },
            {},
            {},
          ],
          [
            {
              text: 'MEDIDAS DE SEGURANÇA',
              colSpan: 2,
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
              fillColor: 'gray'
            },
            {},
            {
              text: 'REFERÊNCIAS NORMATIVAS E OBSERVAÇÕES',
              colSpan: 3,
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
              fillColor: 'gray'
            },
            {},
            {},
          ],
          ...medidas,
          [
            {
              text: 'CLASSIFICAÇÃO DE OCUPAÇÃO E CARGA INCÊNDIO',
              style: 'tableHeader',
              colSpan: 5,
              alignment: 'center',
              bold: true,
              fillColor: 'gray'
            },
            {},
            {},
            {},
            {},
          ],
          [
            {text: 'GRUPO',
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
              fillColor: '#cfe2ff'
            },
            {text: 'OCUPAÇÃO',
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
              fillColor: '#cfe2ff'
            },
            {text: 'DIVISÃO',
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
              fillColor: '#cfe2ff'
            },
            {text: 'DESCRIÇÃO',
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
              fillColor: '#cfe2ff'
            },
            {text: 'CARGA DE INCÊNDIO EM MJ/m²',
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
              fillColor: '#cfe2ff'
            }
          ],
          ...ocupacoes
        ],
      },
    },
    { text: 'Observações:', margin: [15, 30, 15, 15] },
    {
      text: 'Ass. Responsável Técnico - CREA/CAU',
      alignment: 'center',
      margin: [15, 60, 15, 15],
    },
  ];
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const rodape: string[] = [];
  const docDefinitions = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],
    header: [reporTitle],
    content: [details],
    footer: [rodape],
    styles: {
      Tabela: {
        margin: [30, 30, 15, 15],
        fontSize: 11,
      },
    },
  };
  setTimeout(() => {
    pdfMake.createPdf(docDefinitions).download();
  }, 1000);
};

export { pdfQuadroInformavitvo };
