"use client";

import Link from "next/link";

export default function Salem() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "3rem",
        background: "linear-gradient(to bottom, #0f0d1e, #1a142e)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",   // centers everything horizontally
        textAlign: "center", 
        
      }}
    >
      <div style={{ alignSelf: "flex-start" }}>
      <Link href="/haunted_places" style={{ color: "#ccc", textDecoration: "underline" ,}}>
        ← Back to all haunted places
      </Link>
      </div>

      <h1 style={{
          marginTop: "1.5rem",
          fontSize: "2.5rem",
          fontWeight: "700",
          fontFamily: "'Playfair Display', serif",}}>Salem, Massachusetts</h1>

      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFRUXGRgaFxcYGRofHRcaGBgYFxcdGhofHyggGholHRcaITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQFy0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0uLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABMEAABAgMEBgcEBQkHAgcAAAABAhEAAyEEBRIxBkFRYXGREyKBobHB8AcyQtEjJDNS4RRDYnKCorLC8URTY3OSw9I0gyVUZHSjs+L/xAAYAQEBAQEBAAAAAAAAAAAAAAABAAIDBP/EACARAQEAAwEAAgMBAQAAAAAAAAABAhExIRJBAzJCUSL/2gAMAwEAAhEDEQA/AMcAzrCag0LSTweBPlVDU2t4wESSl6tw9bIUAaA2/hHDARyYCITgon8hs1xaRWdMYEwhLnEmBPWSK5aoJZczwi0C8xL557YQduMOVDVBCjUecUqJieYRMwu8HWgj5wQiNABMhazrZQOIor7yXcbTSsNymOCJLBNC1B1oRaUf3ks9cDeRXsIMcs149ExROUpDjFKmDrAa2OXeIhJcxQLpJB2gsecEKu2HY0td2lE+acaAkBL4UGruKkZtXYM9cTpuuRgOBCV83bWxJoYqGi6yJi2LfRLZtXunyiasmkaD9qnCWfGncrD47o1NfbN2bWq7cJdJdJyPkd4hsLOYmbyvSTLSlfWmCalwwAcgs+4+qwxuy8ETThIZRy2HcNb7mgujNkZVDErZLOohwI6uxBVRQw7sBWjMuIAMhRCSSOsMoQs8qjqd+EOLSQSSkg7jTlCkgHWG7YUbGQ+qHFjuwO5GcLpSEl3z3RISiwfNJiRhaWljqiGcu8UrLKpC6pGOYUoKsIzd+QJ1QxVYRLV1iIkdyZYlzAqqkHONe0RssuYBgIKWcjX2iKHoraJC+phBUO+NKuacEJIkykYmDglie1jGbWosSJIAZg24Rl2l9wJtNqVLRJKUgA4gG1ZudTxp9jmLUgFaQhVXSC7VpVhCuEQ42QZY28ebLbo2JZKSCojMtqiCn2QBTDvj0Vppc8uajGU1AYkbIyy0aPpmElLAA5kiLa1VI/JxAi3G5Go6Y5CtVmwlbCKdncawUk5EVPllxg89ZYCit7eucJY91THNsYqHr+kFJeCGfVoMqJAcobyB5Qus0MI2cQoeeqnbBbJmY7achxg1iRnF9Isz5c4MEwphjpS0ZJuUbcobzZTcIemsEKW3jZFKDCOKEPEWMqJCCHFcJLU3b3YNv4whPkqQWUkpO8RsEDHIUgrRJKaNn6VW+XM/hh5arBNAJKBNRhPWSXPvks461BtBFIZ6M/bgbUrH7ioUExSFKMqbhUxoTh/OHX7pGeZHCNfTN6UvUg2azEFqLG341Z8oiQWY5MfeTqrnEte01S7NJUslSsawSdrmIRJNAM90FMWeyXnMb4Z6RrRRYG9PrjEvdt7S10Spz91VFcjn2RVHBDzEpQvUtKsKn3oDv3Ryfa0lismYRkVMPJz2xDS7S5oWT1HYsW1cdkPJagk1FOfOIXRW9EJkErPRp6QhwHAcIZxnmcxsidWoN0iSlSaYiCCCNu5Q8I3MfGaLbzhAIYvkDSOJtCkJqx3aobTbylqJCFBak6gXHZC1jmdInrBoyjRd7LLpQlidYjkq65k1Yxqpma6oXVdrEKTXdCd53+AnAlBGrE/lAUpK/J5FVEACuYxcAImbF7QZCJgwlQAGZB8oymYp6uYLKUXiL0xdmmdnmSwRMQDsKg4hSbpTJJwiaCR91JZ+OUYjovLKjXIZcYtsy2pkSycOLWwDxm4mZLVfV5CYyVKJGvfxaKxbZznAhPyiOVe05aH6NgobQCNlM4Z3WoSuqqYpUxVSFKD11ADVDItpUoAzVXjHIbLkgmqjzgQjbJ7UoEkgUHlnzhuZpyy3wrOT1X1H1z+ccTIfCd1fWxmjEbN5Q63bDkphtKqoQ9SmKqEZooeEJ2ZJOqHKwDTbCiE0YQbRNEoa6wulIAYevXZHEphRCWbXBsglPr15RwpHE+soMxPr15wsmX69V8ICa4CYAluQkZuO/bC6k+vxyESmjmjUy1KCgnFITMQmaAoAsoh864Weohx9ovg9xaNpn2ibLSSuXLCkqmoIAUsEhOChJT1SxLg1hG23ItCjLROSTl0M4YVbgx6pPKNXHRS2QmWlISABhDMNQiu267LOLUm0KmALICQlZAcpcgh26zU10j0fDUcvl6zC22DAfpZSpR2j3fMcjDJdkPwsobs+UaRfNhmG0I6A4JSg8xqpd3qC/vBxlq4xFaSXZJlTUp6NzMcoMhwaM7pIwk12QXEzJS7NaFSlhaSyhkW2hsjnQxMpv6XNpaZCVOG6SX1VfjziRvLR8pJRjQptSuqdtCeqeYiDt9zqlviSpGwnI+txMGrFuU6vkyPyZCZEzGBMJZVFJCk6xrDjPeIgIXVY1jIO+yESGoaGC0wQkxx4UghTAVguaUV2WclIKjjSQAHJo9B+yYF1ZWlG2RMcb0qRmNucLaJE9FaGLN0ZB2faDVxiQlW2YpQSvCrFLmJxskk9QqbFm3Vyh+4PqqggszOPCLDd97kISZqVAZdIA6S1KtUGK2JlXyJOrKJWzCYR9GhSFU67sFUbrJL91IIatCLdjGJMxx+iaQJ9kTNTRQKhtpFcXLSnrTJgBavR9V+JHk0WC5hLEpJThBWVUUWUquonMtVt8akZIpuFYqQw4xLXXYZACiQ7CpMBN4iUCFg0Zgczsp4wax35LVRSSBsAi0ErYggfZpBTuozw96jMPPziIlT0IqCo7iR/xEEtF8IIIKDzPiIDs9/Jw6gQkg68IfxgtmsSJbYQBtUWfnnDGxWtMxROFYO5Qbk0OrbakoSS7k5AnyhBrPvCzhRBJfhAivTrSlSiSan9GBAlfmp6u7Xw19wgspZSk/pP2BoMhOINz74cLUAkJSNW0Z+vQjnt1R8qQQXMLAQaZ6zgqREtOg7P6wok9sJBJO4Q4logQyZb19eucL5evXfygiwwfEEh2O3J29coPZ5wK0pSgs4dRzyekZLuMJqots3+fIQsEuKCnrUPOKzOLlR3nxizoybu/D5w5TSlJLT69UEWLQe/eiUqylBPTTZDKBZjj1giopuivrOv1zyHZDnR0/XJFM5smv8A3O+NYdGc8a1aEE8Izf2lIZdnf/F1bkxqUxLRmvtRT1rNxm7NiY9OXHCdVbR+0LRaJQQopxLAIBIBBBoQKEVi+G1oJSuZKqmqVCrOlyzVFDWkUG6w1pkf5qIuyqoHD/ajOJyJ3/MstoMpcycnChRSQTnjYMS/V9167DC9+2eZMmSzZiyZj9Io1AYJwlsiGfUdUUW+JJHTuCPpAQ4zGMinOJPQC0rE1aAo4cD4XLA4g5bLXFvd0tebTN+XLIE9EoSlYlsUmVTCCoJJUPdYZmmWuI68LgZfRJKFrqAmYClSs/dNQaDaIuE+3BCTMKASkEuBWgelC2UVqx6W2Rc8T5ktaV4QlyApKcw4arsSHbIxqyCbVS3XQZbY0TJT6yMSTwUKd5hibGr4WWP0a92fdGu3ddAE2ctUxkrcISn3UgkF2Znoz7IgJ1xoXZ1T58hKCC/UJQpiwJIAYqxbRlGLg1MlNuS9vyZSnlpWlTBaFPq8DXXE/ZLdYZi0zE4pC04mQoug4kqTnVve2iCW7RtQShYmBlB0ptCWI1NjyemVNUQtvuZconpJUyXvAxJ7S9OcHsPUdZZ5lqcM+8PyjtpvGYuhUw2DKAbKfhIWP0T5FjCChqMZaEJiwGUV2NDAnBMqwdgZYrweIApiyXRM+pr62EoXLL8SR5QwUiglUuT1nUQsBzU4Vq8iIeWKROBDJPKIy9JylSpalKdSVrSVDemWobN8csF8LSarIOWL5/OILmu0HCAatnSGlqtklSSFKIIyAEPZBeWFzBiWUtQZjUTt4xX7XZFEk4S2oxBJWO8ZAzUqgodsNrTeMovnupDIXepqB4bTZK05iIlDOTtPKBDbEqBEtOoWKtQ09N2QWWnN89kKykNqpq9dsGVuba49dscXU3mivr08FKX1QsqUc3jmJjt8uMSElIFawralYUFs2gBIOwevWQglrbAW3eI9Vi+w5Yfsy+WP+UPxh3ZD9KP1vIwjZEfQ/tnwELWJYM1IFanLL3VRXqQE33lcT4xZ0j+n4ZDtisTczxPjFrQkcd2zsyHbDmsRCX7O3vyEONHQPyyRrJmSdtPpk64SUX39/fkIWuD/AKyQf8STrf8APyx56oMOnLjZ50vOMv8Aa2G/JtVZngjZxjVbXLrGW+15H/THfMGvYmPXlx551SbmUfyiRUkdKjX+kI0ESSAACC3Z+bKci2vZGeXR/wBRI/zZf8QjSZhZJ/WPg0ZwWaj6QylJVaHSQ6gQ4IfroyfPOFNA0vaVD/CV/EiBpTNVjtCCpWEBJCXOEdaTknL4jzMd9ng+tEf4S/4kQT9m/wCV8tVndCgauCOYjGx7vZG4KQWjEShgRxHKka/IMGqAkMUqUl9hpUnUaaoqd4aU2lOBRKC5WlSCl0qCcBDh3fraiMotN3THlSztQlXNKz8oot/poWAGGasUfWN/6kWTOPWiXTapdtkyZ01IDFRCXdLglOyo6oMPJtll9OqYuYAFpZKEkDUAosfeL1dqPER7PxisSNgUsfvE+cQvtOs4HQKH6Y/hPlDvza17o+vC5kKkpmTJKVTFLYBHVUxHVdSeqS4NS4qIiry0YKVqQiYFFIfBNA92lQtOWewQ60GtkwWdQCqBaqGtAhBDVprh1fGk/QKP0XvMiYUqYkKS6SC1WGLOM+WHd4pdrupUsOtCkD7w66P9Qy5wW77XOkOZRCgfeAGIEbxmO6NIu9EqbLkKldVCRiIpiU5CmUcs3fa5iKvK4JZClqlYVFbIwFlMXYuOq5oXOUHx/wAPy/1S7yvNM2WEiUmWrFiOH3SWYltRyiLEW+8NF1BSkhaVlLPi6qgDl1hQ9rRBWy6Jks1SRscU7FChjNlaliR0dv8AwNJmq+j+EkPh3Fq4fDhlZSuWS6JlcsBJAPPLjGdzJJTmG9bYc2W2kUU5Go7PwiFi+oTR1Jc7EsW3Bi8RtrnJz6JfFQIhtd15ISBiK27C3nEim+5bsVLbaRTtEI0Y/lkr+5HP8IEPhaLLsRyMCHweq2iYkggAUfjVjr7tkNELJX2kdgy8ucOkpNMQOQbgRj8FO2+G1kHXTvcvxffHCOx4fW75QEDh62U8I6sbPXrsg6EuK+u9vGMtOIlb/W/8TBLxH0fLxGX4CHYAAHrl+Ahreh6ldo8ecU6rx2yygbP+0W5gQtYUgTBx/kVCdgV9DXLEf4teyF7Orr4gHG7gQ75HOK/YVw+8eJ8YtSUvv3Z93uiIeXcqyqpDPqrv1ZROhL7+/uHVEOV3xYwQy+3v/wDyIWuI/XJOvrydf/qJMcw7a8a9woIPcw+uSdypWyn1mRqGUWF9WfG424bnjOvaLcE61JldAkKwFRUCWNQGbFw8I0u2oBiJtCANo5/0j2a3HnYRd1z2hNplgyVuibLxsMWDrA9bC+GlaxfraFpSvElQ6xLtqcVcbosy7CkKUtIZS2xEZqYMMTGrClYQKVD4uY/pBMdK3bLdL/tZ2VZaT+/L/wCME0AP1sf5a/5YvWkl2S5stXSIYkNjQ2IDNqgUplWK3olcJlWkTEzApICgQxBqKbRGfj/01vxdwqmscYxO2S8MyYNi1jkoxuQRGM6QyFItM90kAzVkOGd1E0h/IMF90fn/AFaVUtgQN3utkaRV9NVAKWlMtCWmJJKQRidMypDtr1AZxP6KzAbGhxklTH9Vah4CITTcDpJu9MtXJSE+Ziy/UY/ssHszUVWVQAymqGe1KD5wj7TZX0Eo7Jjc0K+UG9lS3kzk7JgPNIH8sPPabLexg7JqfBQ84v4X9K9oEsYZiT99P7yFD+WGumidY2SSf9MxPyjugM8pVOG6Wa1yxjI8Yc6aKBR7gBMqWSoP/eMzPhAqdUH8n+ktoikKsko5EBQ5KUIidMrxnyJkvo5pSFBVKEFiNRG+JTQJb2QDYtY78XnEV7RZP2Kt6xzCT5Q39VOpOz3og2cKmpYLSgrUn4iyVVSKwWyWyXPMwSyygAnARhw4SA+t/diLsjKsaf1U9xKf5YZaOKa1zB95JPMpV5xbUiZvC6EHEWwsAxT1XJZ+rUbdUV22XAoEhJCmOzCa8HGrW0SmlltmyxLKFlNSC2ugaC2e9T0aSpGIkJVQ5qbWMtUZujNoFEtco9dJA3ig/aFIk1WNYrg7RUGH9ntCZqAtLgVcHb4NwhpOsxVUEcAPN4zpomMeoHlHISVZyPhHP8YEQcmK65pkW2M1KVyoz7oYWVlTHGVTw3PDpRYFQ2qAOs6z498NruS6yB935RynHRJmWPQ9eccAL+v69wjuAnX65+JjuVNW/wBAeMYadBJ3efKvMwS02fGnCCxd/QFOZhbefXgO6FQlgC77/wATQdgi3pGcuUtICRhYfEamue4V4wdNjKj1iVccvlD4Jyp2/iad0KBPr8TSDZ07IlgAAANsz7qJEGUrVnuz5syRHXffzPySIIpYO/dVX7qaQIQrenc7/uppC90BrVJd/elagP7VZ9WqE08uJCeQFYPdtLXIp8SNRH9os+3ON4dZy43y1JrEbaJOz1yiatCawwny49seeoe0S3FQPXEQyUn16eJefKprERF4nCkmEIa+5wCCC0QmjWHpCxiv6S34orKXMMtG75MuYHMYuXrXx8aykvv9dsNrdYUTklCwSklJZ9aSFDvAhSwWgTE4g0OwmOjBGTKKRhSEhNeqEgCtTQMKndEZfmjsu1oKShMtZAHSIAKmBdqsCKZRPpTugqpXZBpKzobotMsRnBa0rSvBhYEEYcTuKjWNeqDae2NUyxTQhBUoFBAAcllpdgNzxaEkjOA7xa80d+7Y3oSFptC0lCyejLpYv1VoJoRsJiR00KWAYB0TQ2XuEqFOIjSLTYQygkBOP3qe9QCu9gA+6GdtuoTPtA4ZsIJSHckqYVxVNXjPx80d+7U72dyyJM5CuqUzKg6nQn5Qj7RZR6GWTqmeKVfKLVdFwS7L0hllbTCCQouAQ+RZ6vrJyERWmt2rnSCmWnErEkgUGWedMjFr/nSl9Vy4Jj2VmBACqEfpqOeYzGRiNutbW5NGCksAHp9GNpJzTrMS1wXTaBZ1Ayzmtg4cvh31qFRCqSqXbJONJSXAIIY1UpOXbGL9NTtSOmUv6JJ2LHeDDSxJezoJGyuqhaJPSxA/Jyz0UnxbziOuKYegoW97Li8V6vpzRxR6IjYs+AiPkz8CpicRZJIprALbYfXEetOTsU/Mn5RD3mnDOmDaX5184y2Bt5gQ1KYECWUAEhk0Tk572yckkweXKCBln3wJaWO41cbPLthabhI9eu+PPa6aIqPrL8e6AlKQXevfXvjiRTb3DyHjBtiQM2Zsqltw1xImoh38q+ZhSWew76HzVBF1OECg2VBruYHnCqKZeLdyR5xI6SGDnnl3msANmef4qhBWIbBvJAd+Z74T6RNTiBKQVEJFWGdVEmDR2flQP6XNXySILMJyoNxP8qc4iBfYUsJSg1IDqLsCdgziYHIdiR84bjrql2TCDv7AEj5wrdaR+VSWIzQ9Xf6xZ9ZzjjDYORPeYVu5BNqk50wmrf39nGqNYdGXHoO1y6xGWlaU0KgCcnIrweJm0APlGT+3GWDLszffmZ5vgDMM9vpo9e9POt0y1DpOi62IpKwwLFIISS/EikNrYgKBBPNJ+UYJZJ8yWtCkqUghSWIp8QPaKZRv0+2TEleRCQSHGbAHbv2QzLYs0x/Ta6cCyoM0VaUgk0zjUdNr9J+i6NlqQopU7gEB6hhGZXZb8M1LpCnIGzMiOWU9dMeNM0ICsPWMW0JhhdckBAIEMbfpTZpMxUpczCtLUKVtUAjrANrEd55HLtWRG6DKRtiIuC8hapSZktSCWTjSCeoopBKSW1PEt1vu8iDCBsD0ZxGW2m5pllndAmZNlgnqNNWxSSQhgDuAbUecarLNHjPNPLSTbpaU4sQQjUGqokMTroXctQb4zkYvInooFomSjtOQ7QSNXeI4ZYV7s1J7R/WJNNoOogj1mziEZyJa/eloUf2SfnCEZPsq9j8CIZIQVpcAkORkdRIPeDEuuyyxkFo4FQ7sohrAWkoUlSmUlykmgJJKmByq8SI4QDlFdvXAq0oQtAPVdJIDgg6ia98WNVDnFM0ivVKLVL/RcHtjOTUOb4sYmoKCSH18CD5RFXddaZSCkrU7k5U2duUT+ILAUnXDWcmsZpV2xWRUucsmqVAMraRuzGuIjSBDTidoSe5vKLXM2RW9IkddB2pI5E/OMVuIqBAgQFYhMD4iGf1SDmuWe3+j+MFtVnMtGIlIJagFWO1zDS6lFb4iTUM7U5/KOOvNumzgTGL8Qd3aHPfCiZpPwu4Hg2t6/M8YE2W3fm7Ha+QgSUNV6bR+Fe14kVSdrBu7tV8ojr4nlk4VFnOR+VIlkSRm1MnLDvLxFX9knidZOrlFj1XheRKC0ysX3U68xXOFESQETGp9EvLsgWZsEngjXx1QZIGGY390vyi+wgLCfpEfrDxi3S31DknzMVGxfaI/WT4iLaG3HmqH8ixGWrb3q8hSF7oUBapNM2+Ej89II45QkkbMXYAPGFLvP1qTu3v+dk8oMOnLj0dPEZX7b26GzO7dIt2NfszlnGqWlLxl/tsA6CzO7dKtwP8AKX2dseq8cIxckOMLs4zAfPaI9BWpHvnahX8KIwacLPQpK32MWBGWrWY3q2TQEGqayyKqSM0pAzO4xYjJQNNrN9Yk1DnGGrtY6mjLbN9ojijxEalpdMUufJmAOlBU5BBYFQOonVGVoLKSdhHcRGcutY8b/YZZEsB4yn2gWZRt0wJSVFQQWSCT7gGQ4RrV22hMxAIMZX7UZTWw0f6OWT++PIR0z4xj1L+y9B6KaCGabLNdhT4Uie0qmzEywErUEqUtCgDmFIyrlFb9lNobpxnWVnVg00RY9MVuiVkPrCRluMZnFeqv7LLynKtglqmzFIMtfUK1EOMJDAlnzi0+0WWMdmLfGR5jlXmYonswV/4jJB1pmD/41K8ovntMGFEhQek3/bmnyix/U3pG8dI0WeelOK0JXNwB5ahhJwoAdKqD3gMtRiQtmkU1MtK0TTMxS0LCVy0fGEs6gznrbNRyhym5LPPTLVMlJUsAMou4aoqCIyq+L8noV0QKUpCUgBnZKScIBJyAAFa0rGrdCTfFrtGlE60ImI6skoQZgXJdKjgZ055EHuixXQkizSgS4CO19ZzOcZbo3bFqmTQovikzwKDVJmK1fqxp1wqeyyv1W5Uixu1lNGNivyzTlhEqalZIoHIJzJDEDIB4pGmt2rlzisjqqyrEbcacFsSNilp/dUImdMQoozUUsGBJYEKqWydoxbuNSaqQ0blK6AP2Q7nphroiomyo3YhyUYgU26am2FBWVJxrGFVQxBI8od+JNTUkGsV7SVFEHYVDmAfKHt73mtBSwSBiALDMEP2ZGENJEfRPsWO8ERmtRXYEEeBGSuekqsMtCGZkpJHaM+Lnz1xEXMDhLZk7DSkSelcsplg40qJJFGASyhkGBahGWoxG3YhkqJHxc6cY44/q3ena5ZNSz/LPN9/KHKZL5k8yd9NRggVrSaMw10ZtlDXugi1mmM50BLk8KmkBLBhu5D5mIq/jRPE7dm+JUq/o4D8hETfyqJ4nbw1w49GXDpCVdHKIaiU5g7CdsKJQQmc6n+jmBmA2bn74NZyehlsfhT4GOzicM5z+bmfyxfaV2xfaI/WT4iLeD6Km8Ip9i+0R+snxEXFCTvHAAeMa/IsQR+zyKoVsA+sS9ydjfnpA84K2081N4R27/t06+qMiT/aLPGcOnLj0jNjLvbaPoLPs6Y68OctY96oTrqcucanMEZv7apX1WQrNp/8AtTdoI1awY9NcIwe2KSnJKRn+dSvvSwjTdIb9dLA/m0DkPxjObbLCgMhXLEjXuShLRcdJ7EENQVTLPNCTGLbGpJVbtKipYJqxDcxFcmFieJ8YnZyxiFBnEHPHWVxPjGY00jRO/Sk4VZPuhl7QVmZa0qSAfoUGpSGAXMBqqnxCK/KxOMOcH0jlKQuWZwUp5dGIGvaQdp1RuZbmmfj7tYfZmvFMng4fzWQT95Y1DZri1aUAJlYilKmnJbFipVnoRWKX7MpgE2c1Ook57FgfzRbdM1NZl1ymA9zx0n6uWX7KJ7PzhvGzjIhSwT/21pjRPaZKJs8tR1TR3oWn+aM40aOG9JP/ALgjmpSfONP9pCWsj7Fy+9aU7N8GPGsupC5ElUuWpz7qWAJzBLvtenKMY0wl4bSsbFKTyb/lGz6KqxWeWdw8BGR+0JDWtf66z/DDnwYdMdEa2pA+8Fp/1S1p840/RBWKyS+H4eUZZostrXI/zZQ5rSD4xp+gyfquH7p9d7wYHNnGAovA7rSR2GYU+Bid0rT9H8NAt+uh/dpR3NYh9JgZd4TDqE1KueFXnCV7WwzFK7RGd6a1tPaC2gGSUPUKV3184gb3SUW8n9NHeEjzhpcNsMo4gcjXug9+2nFPEw6whXI/hBvw6O9JZXUdjRtXFPnDi++tIUdyVd4+cC/w8tXrIv4QmVYrKP8AL8E/hDVFXgQIEZKattqUWQsvhUs4QzOaA/6go12tCMueyCcvhc1qRU8er+9CNpUHLMwoG1s6Qe59lYVnyOjQCXNS1Dmr4qjYAOIVsg0iku2kfEQac9bVp/WCqtTl6kOOWdOR7oayASSABUNV9oJq9MngTCAGem5n7deWqLSSCL2W+e0nIBsOWWYfPOOzqlMspdQBUo7CaudwDHszhgUhjQu9NWwH1ugKWQzZMBQ7tfM0/pFpLDLbo5YSHoCSlmdi4ckVrX55cngssUGJKk1UPiGzs2xDhaR8IWkhkvtapbt8N8O5ZlYgAlOEZlku4IHVHbTbHOz1rZCzXTMC0klDAguFO7F6NFgYagP9BMI/lTkJQCpsw6RSjmnHuMdWd43fSGvDaIMrb0yQuQdTjgAPGDWNRE4Gvua2/wDMWfZDbE+WE8zCth+1OVJYyBH9ps0WPVXpmcWMQ2klwybdLTLnY2SsLGAgFwlSauC4ZRpEzaTWCBXCPS4M2tHsus/TAPMFnwFyCjHjegbC2FqvDjTBFgTKwrSxSkJCuhKlMkYQ5zNBnGhLJaMt9o1sBJlBQMxsRQ4fDWsGV1DjN1k9oTLJLFRDlj0Z7DDFd1AucR7UkZxLKIruIHaW+YgTUho4bdviSusATUA5O0Xq/dFPy4SlImhGBJSaEu5SRr3d8Z/koEbY1nRWY8sPsjt+L3xyz8V3Q7RFVmmLXNW2JK5fRl3YLSUrxBwxCXbfFlvW7pE5C5cxQAWxPXIqGb4dwiVmy3OuIayX3Z5sxMpK8SlBagGPwLKFCutwabA8dvJ4599VWx6Az02uXaEzpKkicmZQryEzER7uZHZWLX7RUvYlkalyv/tQT4RMy0gbeR+UVn2jX1KlWfoVAlc3IBurhqCp2o7Qaki9tP8AQ0vZUgEhmy3h4y3T0lU9SinD7pIZmJBem/OLvonpHIllNlWplqFDqBDAJOsEguDkYrvtaltaVHaU9yEwZe4tY+VTrmXhny1fdWg8lAxrmiAZM9P3ZswclqA8DGNyCxLZtTmI1m6FzBOnBBSEmdMxuK9dSlS21ZqrSDA5ofSvRGdOtK5yFpCVlGeJ0slKXNMurELpddKZMwYZgViqU0cH5Rp6JuKhcKAqnWO+o3ikZ5p8lp44QZzU2sb6qlilFJqzFotOkmji5nRrl4WwAF32vsO2K1GiXdPxSEF6sAeMYw9ayQduu0KllImAqY01OQ2ebdkMLPZlIlCWpnDimVSfnFjnI2ecRVrzjVEUUJgQpPDKUNhPjAjLR1JAxAmobuA63cCIIu0Op8669laNlrMCBAnZKWICiz7noaPHUJfGQxZIfgKmnZxryECFE5Ez3iQGan6JY4W7Q3a8BLBideedBn2v5QIEScKiotxbsFW7B3QvYJhxYQMQVQpdsQDEh/2XrsgQIkcJLFLDq1bbsIOVahyKV11h/YytISSS3u6nIFC1SwCsI1ZwIEYvFEgxz63MRyzglaiHA6IGp1flFnbvakcgRmdbr0nel4IkpxzFEDEEuxNVFhQQdU8AE1LB2HdAgR6I4FkTASU1o3fWMp0muKUqbOtK5i+nExbioQ0vEmUw63wpQ9Q5SSwygQIMp41jdVm04dUMMXXA727neCWyYEkAu9O9QTtgQI80dzUyyaA1New9uyLbct7KsMgLIxyJZCFAe/0iz0jvQYQlTbX5wIEdfx1zzLaY6RzhLstos5KEzAuiswULQoOAWPukcFHbFAlWlSZ4nJZBEzG9SE9bEX1lO7MiBAjWVuxIu1v07WZdqEsOcRTJW2EpQQRiO0gimWdYolvvKZaFpUshS8ASTkVNkVFqqZg/6IgQIrlaNSGiLYoKCwWUkgpUAKFLYeWEQuq2LmJwzFFZdwVEkuQAQ51UECBETeUliNbluFRGq3LMeZMP3lWRX+sWd/44ECN4MZJ28ZyAUpI6xxYSKMU78w9eUZVfttXOnKWouCnEl2ogJcOBkWFW1vAgRfkWCPVZpr4QA+RrkcZl5/rCE02WbhzIS2OitkvpAW24WgQIxpra53baVzcaClsFCcT9YKShfYFKFdcdXd0xTAAVUlIqPiWqXX9pJ7oECNBU51yzZhK0hJSqoq2dcoECBDMY0//Z"
        alt="Salem, Massachusetts"
        style={{
          width: "100%",
          maxWidth: "700px",
          marginTop: "2rem",
          borderRadius: "12px",
          boxShadow:"0 8px 20px rgba(0,0,0,0.5)",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      <p
        style={{
          marginTop: "2rem",
          lineHeight: "1.7",
          maxWidth: "1100px",
          fontSize: "1.1rem",
        }}
      >
        Salem is most known for the 1692 Witch Trials. Today, it embraces its dark past
        with museums, walking tours, candlelit reenactments, and October festivals that attract
        over a million visitors each year. The Witch House and the Salem Witch Trials Memorial
        remain must-see landmarks for those curious about its haunted history.
      </p>

      {/* Origins Section */}
      <h2 style={{ marginTop: "2.5rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Origins
      </h2>
      <p
        style={{
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "900px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        Salem is most known for the infamous 1692 Witch Trials, where mass hysteria led to
        accusations, trials, and executions of alleged witches. The town’s dark history has
        shaped its cultural identity and made it a focal point for historical tourism.
      </p>

      {/* Sightings Section */}
      <h2 style={{ marginTop: "2rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Sightings
      </h2>
      <p
        style={{
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "900px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        Visitors and locals report strange occurrences around the town’s historic sites,
        including ghostly footsteps, shadowy figures, and unexplained cold drafts.
        October events often feature paranormal tours where people claim to witness spirits.
      </p>

      {/* Additional Notes (optional) */}
      <h2 style={{ marginTop: "2rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Fun Fact
      </h2>
      <p
        style={{
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "900px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        Today, Salem attracts over a million visitors each year for walking tours, candlelit
        reenactments, museums, and seasonal festivals. The Witch House and Witch Trials Memorial
        are popular stops for those intrigued by its haunted history.
      </p>
    </div>
  );
}
