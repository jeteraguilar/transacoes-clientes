package com.transaction.spring.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity()
@Table(name = "transacao")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Transacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nome;
    private double valor;
    private String numeroConta;

    @Enumerated(EnumType.STRING)
    private TipoTransacao tipoTransacao;
}
